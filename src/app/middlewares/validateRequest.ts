import { AnyZodObject, ZodError } from "zod";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

const validateRequest = (schema: AnyZodObject, source: 'body' | 'params' | 'query') => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req[source]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map(err => err.message).join(", ");
        next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
      } else {
        next(error);
      }
    }
  });
};

export default validateRequest;

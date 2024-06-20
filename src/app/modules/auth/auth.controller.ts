import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.loginUserByDb(req.body);
    const { refreshToken, accessToken } = result;

    res.cookie("refreshToken", `Bearer ${refreshToken}`, {
        secure: config.NODE_ENV === 'production',
        httpOnly: true,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        token: accessToken,
        data: {
            ...result.user, 
        },
    });
});

export const AuthController = {
    loginUser
};

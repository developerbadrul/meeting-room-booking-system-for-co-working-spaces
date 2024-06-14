import httpStatus from "http-status";
import AppError from "../errors/AppError";
import { TUserRole } from "../modules/users/user.interface";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import UserModel from "../modules/users/user.model";
import { Request, Response, NextFunction } from 'express';

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const authorizationHeader = req.headers.authorization;

        console.log("tokern", authorizationHeader);


        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You have no access to this route");
        }

        const token = authorizationHeader.split(' ')[1];

        let decoded: JwtPayload;
        try {
            decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        } catch (error) {
            throw new AppError(httpStatus.UNAUTHORIZED, "unauthorizae");
        }

        const { email, role } = decoded;

        const user = await UserModel.isUserExistsByEmail(email);

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
        }

        if (requiredRoles.length && !requiredRoles.includes(role as TUserRole)) {
            throw new AppError(httpStatus.FORBIDDEN, 'You do not have permission to access this route');
        }

        req.user = decoded;

        next();
    });
}

export default auth;

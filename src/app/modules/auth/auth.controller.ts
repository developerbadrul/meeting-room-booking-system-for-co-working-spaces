import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.loginUserByDb(req.body);
    const { refreshToken, accessToken } = result;

    res.cookie("accessToken", `Bearer ${accessToken}`, {
        secure: config.NODE_ENV === 'production',
        httpOnly: true,
    });

    res.cookie("refreshToken", `Bearer ${refreshToken}`, {
        secure: config.NODE_ENV === 'production',
        httpOnly: true,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User is logged in successfully!',
        data: {
            accessToken,
            refreshToken,
        },
    });
});

export const AuthController = {
    loginUser
};

import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUser = catchAsync(async (req, res) => {
    const userData = req.body;
    // console.log(password, "user data", userData);
    const result = await UserServices.createAdminIntoDB(userData)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `User is created successfully`,
        data: result
    })

})


export const UserController = {
    createUser
}
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { RoomService } from "./room.service";

const createRoom = catchAsync(async (req, res) => {
    const roomData = req.body;
    const room = await RoomService.createRoomInDb(roomData)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room added successfully',
        data: room
    });
})

export const RoomController = {
    createRoom
}
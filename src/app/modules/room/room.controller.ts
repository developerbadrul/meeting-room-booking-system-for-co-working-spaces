import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RoomService } from "./room.service";

const createRoom = catchAsync(async (req, res) => {
    const roomData = req.body;
    const room = await RoomService.createRoomInDb(roomData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room added successfully',
        data: room
    });
});

const getRoom = catchAsync(async (req, res) => {
    const { id } = req.params;
    const room = await RoomService.getRoomById(id);

    if (!room) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Room not found',
            data: {}
        });
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room retrieved successfully',
        data: room
    });
});


const getAllRooms = catchAsync(async (req, res) => {
    const rooms = await RoomService.getAllRoomsFromDb()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Rooms retrieved successfully",
        data: rooms,
    });
})

export const RoomController = {
    createRoom,
    getRoom,
    getAllRooms
};

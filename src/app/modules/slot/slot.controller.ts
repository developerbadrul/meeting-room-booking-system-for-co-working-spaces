import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotService } from "./slot.service";

const createSlot = catchAsync(async (req, res) => {
    const slotData = req.body;
    const slots = await SlotService.createSlot(slotData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Slots created successfully',
        data: slots,
    });
})

const getAvailableSlots = catchAsync(async (req, res) => {
    const { date, roomId } = req.query;
    const slots = await SlotService.getAvailableSlots(date as string, roomId as string)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Available slots retrieved successfully',
        data: slots,
    });
})


export const SlotController = {
    createSlot,
    getAvailableSlots
}
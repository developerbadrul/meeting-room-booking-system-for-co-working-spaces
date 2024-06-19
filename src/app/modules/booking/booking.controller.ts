import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingService } from "./booking.service";
import { TBooking } from "./booking.interface";
import { Types } from "mongoose";

const createBooking = catchAsync(async (req, res) => {
    const bookingData: Partial<TBooking> = req.body;
    const newBooking = await BookingService.createBooking(bookingData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking created successfully",
        data: newBooking,
    });
});

const getAllBookings = catchAsync(async (req, res) => {
    const bookings = await BookingService.getAllBookings();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All bookings retrieved successfully",
        data: bookings,
    });
});

const getMyBookings = catchAsync(async (req, res) => {
    const userId = new Types.ObjectId(req.user._id);  // Use user ID from req.user
    const bookings = await BookingService.getUserBookings(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User bookings retrieved successfully",
        data: bookings,
    });
});

const updateBooking = catchAsync(async (req, res) => {
    const bookingId = new Types.ObjectId(req.params.id);
    const bookingData = req.body;

    const updatedBooking = await BookingService.updateBooking(bookingId, bookingData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking updated successfully",
        data: updatedBooking,
    });
});

const deleteBooking = catchAsync(async (req, res) => {
    const bookingId = new Types.ObjectId(req.params.id);

    const deletedBooking = await BookingService.softDeleteBooking(bookingId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking deleted successfully",
        data: deletedBooking,
    });
});

export const BookingController = {
    createBooking,
    getAllBookings,
    getMyBookings,
    updateBooking,
    deleteBooking,
};

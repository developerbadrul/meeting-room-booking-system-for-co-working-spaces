import Booking from "./booking.model";
import { TBooking } from "./booking.interface";
import RoomModel from "../room/room.model";
import { Types } from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createBooking = async (bookingData: Partial<TBooking>): Promise<TBooking> => {
    const room = await RoomModel.findById(bookingData.room);

    if (!room) {
        throw new AppError(httpStatus.NOT_FOUND, "Room not found");
    }

    if (!bookingData.slots || !Array.isArray(bookingData.slots)) {
        throw new AppError(httpStatus.BAD_REQUEST, "Slots are required and should be an array");
    }

    const totalAmount = room.pricePerSlot * bookingData.slots.length;
    bookingData.totalAmount = totalAmount;

    const booking = new Booking(bookingData);
    await booking.save();
    return booking;
};

const getAllBookings = async () => {
    return await Booking.find({ isDeleted: false }).populate("slots room user");
};

const getUserBookings = async (userId: Types.ObjectId) => {
    return await Booking.find({ user: userId, isDeleted: false }).populate("slots room user");
};

const updateBooking = async (bookingId: Types.ObjectId, bookingData: Partial<TBooking>): Promise<TBooking | null> => {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, bookingData, { new: true });
    if (!updatedBooking) {
        throw new AppError(httpStatus.NOT_FOUND, "Booking not found");
    }
    return updatedBooking;
};

const softDeleteBooking = async (bookingId: Types.ObjectId): Promise<TBooking | null> => {
    const deletedBooking = await Booking.findByIdAndUpdate(bookingId, { isDeleted: true }, { new: true }).populate("slots room user");
    if (!deletedBooking) {
        throw new AppError(httpStatus.NOT_FOUND, "Booking not found");
    }
    return deletedBooking;
};

export const BookingService = {
    createBooking,
    getAllBookings,
    getUserBookings,
    updateBooking,
    softDeleteBooking,
};

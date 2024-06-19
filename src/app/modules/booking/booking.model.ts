import mongoose, { Schema, Types } from "mongoose";
import { BookingModel, TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
    date: {
        type: String,
        required: true,
    },
    slots: [
        {
            type: Schema.Types.ObjectId,
            ref: "Slot",
            required: true,
        }
    ],
    room: {
        type: Schema.Types.ObjectId,
            ref: "Room",
            required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    isConfirmed: {
        type: String,
        enum: ["confirmed", "unconfirmed"],
        default: "unconfirmed",
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Booking = mongoose.model<TBooking, BookingModel>("Booking", bookingSchema);

export default Booking;

import { Document, Model, Types } from "mongoose";

export interface TBooking extends Document {
    date: string;
    slots: Types.ObjectId[]; // Array of ObjectIds referencing slots
    room: Types.ObjectId; // ObjectId referencing a room
    user: Types.ObjectId; // ObjectId referencing a user
    totalAmount: number;
    isConfirmed: "confirmed" | "unconfirmed";
    isDeleted: boolean;
}

export interface BookingModel extends Model<TBooking> {}

import { Document, Model, Types } from "mongoose";

export interface TBooking extends Document {
    date: string;
    slots: Types.ObjectId[]; 
    room: Types.ObjectId; 
    user: Types.ObjectId; 
    totalAmount: number;
    isConfirmed: "confirmed" | "unconfirmed";
    isDeleted: boolean;
}

export interface BookingModel extends Model<TBooking> {}

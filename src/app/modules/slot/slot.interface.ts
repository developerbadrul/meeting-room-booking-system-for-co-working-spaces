import { ObjectId } from 'mongoose';

export interface ISlot {
    room: ObjectId;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
}
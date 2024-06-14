import mongoose, { Schema } from 'mongoose';
import { IRoom } from './room.interface';

const roomSchema: Schema = new Schema<IRoom>({
    name: { type: String, required: true, trim: true },
    roomNo: { type: Number, required: true, unique: true },
    floorNo: { type: Number, required: true },
    capacity: { type: Number, required: true },
    pricePerSlot: { type: Number, required: true },
    amenities: [{ type: String }],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

const RoomModel = mongoose.model<IRoom>('Room', roomSchema);

export default RoomModel;

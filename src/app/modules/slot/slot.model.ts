
import mongoose, { Schema } from 'mongoose';
import { ISlot } from './slot.interface';

const slotSchema = new Schema<ISlot>({
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
});

const SlotModel = mongoose.model<ISlot>('Slot', slotSchema);

export default SlotModel;

import { ISlot } from "./slot.interface";
import SlotModel from "./slot.model";
import { addMinutes, format } from 'date-fns';

const createSlot = async (slotData: ISlot) => {
    const { room, date, startTime, endTime } = slotData;
    const slotDuration = 60;

    const start = new Date(`${date}T${startTime}:00`);
    const end = new Date(`${date}T${endTime}:00`);
    const slots = [];

    let currentTime = start;

    while (currentTime < end) {
        const nextTime = addMinutes(currentTime, slotDuration);

        if (nextTime > end) break;

        const slot = await SlotModel.create({
            room,
            date,
            startTime: format(currentTime, 'HH:mm'),
            endTime: format(nextTime, 'HH:mm'),
            isBooked: false,
        });

        slots.push(slot);
        currentTime = nextTime;
    }

    return slots;
}


const getAvailableSlots = async (date?: string, roomId?: string) => {
    const query: any = { isBooked: false };
    if (date) query.date = date;
    if (roomId) query.room = roomId;

    return SlotModel.find(query).populate("room")
}

export const SlotService = {
    createSlot,
    getAvailableSlots
}
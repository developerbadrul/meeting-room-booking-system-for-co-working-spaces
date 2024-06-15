
import { z } from 'zod';

const createSlotValidationSchema = z.object({
    room: z.string().length(24, 'Room ID must be a valid 24-character ObjectId'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD'),
    startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Start time must be in the format HH:mm'),
    endTime: z.string().regex(/^\d{2}:\d{2}$/, 'End time must be in the format HH:mm'),
});

export const SlotValidation = {
    createSlotValidationSchema,
};

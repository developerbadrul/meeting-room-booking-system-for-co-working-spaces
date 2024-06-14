import { z } from 'zod';

const createRoomValidationSchema = z.object({
    name: z.string().min(1, { message: "Room name is required and cannot be empty" }),
    roomNo: z.number({ invalid_type_error: "Room number must be a number" }).min(1, { message: "Room number must be greater than 0" }),
    floorNo: z.number({ invalid_type_error: "Floor number must be a number" }).min(0, { message: "Floor number cannot be negative" }),
    capacity: z.number({ invalid_type_error: "Capacity must be a number" }).min(1, { message: "Capacity must be at least 1" }),
    pricePerSlot: z.number({ invalid_type_error: "Price per slot must be a number" }).min(0, { message: "Price per slot cannot be negative" }),
    amenities: z.array(z.string().min(1, { message: "Amenity cannot be empty" }), { invalid_type_error: "Amenities must be an array of strings" }),
    isDeleted: z.boolean().optional()
});

export const RoomValidation = {
    createRoomValidationSchema
}

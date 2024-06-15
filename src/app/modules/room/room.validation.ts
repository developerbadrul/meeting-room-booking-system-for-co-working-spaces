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

const getRoomValidationSchema = z.object({
    params: z.object({
        id: z.string({ required_error: "ID Required" }),
    }),
});


const updateRoomValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").optional(),
        roomNo: z.number().int("Room number must be an integer").optional(),
        floorNo: z.number().int("Floor number must be an integer").optional(),
        capacity: z.number().int("Capacity must be an integer").optional(),
        pricePerSlot: z.number({ message: "Price per slot must be a number" }).optional(),
        amenities: z.array(z.string().min(1, "Amenity is required")).optional(),
    }),
});



export const RoomValidation = {
    createRoomValidationSchema,
    getRoomValidationSchema,
    updateRoomValidationSchema
}

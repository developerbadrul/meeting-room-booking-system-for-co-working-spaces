import { z } from "zod";
import { Types } from "mongoose";

const createBookingValidationSchema = z.object({
    date: z.string({ message: "Date is required" }),
    slots: z.array(z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: "Invalid slot ID",
    })).min(1, "At least one slot is required"),
    room: z.string({ message: "Room ID is required" }).refine((value) => Types.ObjectId.isValid(value), {
        message: "Invalid room ID",
    }),
    user: z.string({ message: "User ID is required" }).refine((value) => Types.ObjectId.isValid(value), {
        message: "Invalid user ID",
    }),
    totalAmount: z.number().positive("Total amount must be a positive number").optional(),
    isConfirmed: z.enum(["confirmed", "unconfirmed"]).optional(),
    isDeleted: z.boolean().optional(),
});

const updateBookingValidationSchema = z.object({
    date: z.string().optional(),
    slots: z.array(z.string()).optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount: z.number().optional(),
    isConfirmed: z.enum(["confirmed", "unconfirmed"]).optional(),
    isDeleted: z.boolean().optional(),
});




export const BookingValidation = {
    createBookingValidationSchema,
    updateBookingValidationSchema,
};

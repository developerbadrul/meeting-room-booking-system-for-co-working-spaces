import { z } from "zod";


const userValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.enum(["admin", "user"]).optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
});


export const ValidateUser = {
    userValidationSchema
}
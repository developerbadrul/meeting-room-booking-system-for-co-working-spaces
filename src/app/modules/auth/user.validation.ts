import { z } from "zod";
import { USER_ROLE } from "./user.const";


const userValidationSchema = z.object({
    name: z.string().transform(value => value.trim()),
    email: z.string().email({ message: "invalid Email address" }).trim().toLowerCase(),
    password: z.string({ invalid_type_error: "Password Must String" }).max(20, { message: 'Password can not be more than 20 characters' }),
    phone: z.string({ message: "Phone Number Required" }).trim(),
    address: z.string({ message: "Address is Required", invalid_type_error: "Address must String" }).transform(value => value.trim()),
    role: z.enum([USER_ROLE.admin, USER_ROLE.user], { message: `Role must be either "user" or "admin"` })
})

export const ValidateUser = {
    userValidationSchema
}
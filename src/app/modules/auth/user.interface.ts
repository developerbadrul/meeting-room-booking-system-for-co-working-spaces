import { USER_ROLE } from "./user.const";

export type TUserRole = keyof typeof USER_ROLE;

export interface TUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    role: TUserRole
}
import { Model } from "mongoose";
import { USER_ROLE } from "./user.const";

export type TUserRole = keyof typeof USER_ROLE;

export interface TUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: TUserRole;
}


export interface UserVerify extends Model<TUser> {
    isUserExistsByEmail(email: string): Promise<TUser | null>;
    isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>
}


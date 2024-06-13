import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import UserModel from "./user.model";
const createAdminIntoDB = async (payload: Partial<TUser>) => {

    const savedUser = UserModel.create(payload)
    return savedUser;
}


export const UserServices = {
    createAdminIntoDB
}
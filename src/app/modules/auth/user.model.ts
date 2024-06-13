import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE } from "./user.const";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        requied: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: 0
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: Object.values(USER_ROLE),
        default: "user"
    }
}, { timestamps: true });


userSchema.pre("save", async function (next) {
    const user = this;

    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    )
    next()
})


userSchema.post("save", function (doc, next) {
    doc.password = "",
        next()
})

const UserModel = mongoose.models.User ?? mongoose.model<TUser>('User', userSchema);


export default UserModel;


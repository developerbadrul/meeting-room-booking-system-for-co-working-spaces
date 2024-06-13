import mongoose, { Schema } from "mongoose";
import { TUser, UserVerify } from "./user.interface";
import { USER_ROLE } from "./user.const";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<TUser, UserVerify>({
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
        select: false
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


userSchema.statics.isUserExistsByEmail = async function (email: string) {
    return await UserModel.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}


const UserModel = mongoose.model<TUser, UserVerify>('User', userSchema);


export default UserModel;


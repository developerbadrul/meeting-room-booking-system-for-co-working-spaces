import UserModel from "../users/user.model";
import { TLoginUser } from "./auth.interface";
import createToken from "./auth.utils";
import config from "../../config";

const loginUserByDb = async (payload: TLoginUser) => {
    const user = await UserModel.isUserExistsByEmail(payload.email);

    // console.log("user when login", user);


    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordMatched = await UserModel.isPasswordMatched(payload.password, user.password);

    if (!isPasswordMatched) {
        throw new Error("Invalid password");
    }

    const jwtPayload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string,
    );

    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        address: user.address,
    };

    return {
        accessToken,
        refreshToken,
        user: userData,
    };
};

export const AuthServices = {
    loginUserByDb
};

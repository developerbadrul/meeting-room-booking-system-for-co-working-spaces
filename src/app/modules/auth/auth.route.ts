import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import { UserController } from "../users/user.controller";
import { ValidateUser } from "../users/user.validation";

const router = Router();

router.post(
    "/login",
    validateRequest(AuthValidation.loginValidationSchema, "body"),
    AuthController.loginUser
);

router.post(
    "/signup",
    validateRequest(ValidateUser.userValidationSchema, "body"),
    UserController.createUser
);

export const AuthRouter = router;

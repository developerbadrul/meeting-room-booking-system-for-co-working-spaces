import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import { ValidateUser } from "../users/user.validation";
import { UserController } from "../users/user.controller";

const router = Router()

router.post("/login", validateRequest(AuthValidation.loginValidationSchema), AuthController.loginUser)
router.post("/signup", validateRequest(ValidateUser.userValidationSchema), UserController.createUser)


export const AuthRouter = router;
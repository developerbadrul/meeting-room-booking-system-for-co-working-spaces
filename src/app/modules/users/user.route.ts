import { Request, Response, Router } from "express";
import { ValidateUser } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "./user.controller";

const router = Router();

// router.post("/signup", validateRequest(ValidateUser.userValidationSchema), UserController.createUser)

export const UserRoute = router;
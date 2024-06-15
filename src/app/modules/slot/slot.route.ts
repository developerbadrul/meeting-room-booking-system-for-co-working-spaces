import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../users/user.const";
import { SlotValidation } from "./slot.validation";
import validateRequest from "../../middlewares/validateRequest";
import { SlotController } from "./slot.controller";

const router = Router();

router.post(
    '/',
    auth(USER_ROLE.admin),
    validateRequest(SlotValidation.createSlotValidationSchema, "body"),
    SlotController.createSlot
);

export const SlotRoute = router;
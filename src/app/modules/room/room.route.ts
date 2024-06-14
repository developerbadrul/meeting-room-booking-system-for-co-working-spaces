import { Router } from "express";
import { RoomController } from "./room.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../users/user.const";
import validateRequest from "../../middlewares/validateRequest";
import { RoomValidation } from "./room.validation";

const router = Router();

router.post("/", auth(USER_ROLE.admin), validateRequest(RoomValidation.createRoomValidationSchema), RoomController.createRoom)
router.get("/:id", RoomController.getRoom);

export const RoomRoute = router;
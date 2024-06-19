import { Router } from "express";
import { RoomController } from "./room.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../users/user.const";
import validateRequest from "../../middlewares/validateRequest";
import { RoomValidation } from "./room.validation";

const router = Router();

router.post(
    "/",
    auth(USER_ROLE.admin),
    validateRequest(RoomValidation.createRoomValidationSchema, "body"),
    RoomController.createRoom
);

router.get(
    "/:id",
    // validateRequest(RoomValidation.getRoomValidationSchema, "params"),
    RoomController.getRoom
);

router.get(
    "/",
    RoomController.getAllRooms
);

router.put(
    "/:id",
    auth(USER_ROLE.admin),
    // validateRequest(RoomValidation.updateRoomValidationSchema, "body"),
    RoomController.updateRoom
);

router.delete("/:id", auth(USER_ROLE.admin), RoomController.deleteRoom)


export const RoomRoute = router;

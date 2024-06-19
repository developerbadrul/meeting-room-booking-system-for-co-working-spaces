import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../users/user.const";
import { BookingController } from "../booking/booking.controller";


const router = Router()

router.get(
    '/',
    auth(USER_ROLE.user),
    BookingController.getMyBookings
);


export const MyBooking = router;
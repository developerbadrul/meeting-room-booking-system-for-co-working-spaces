import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../users/user.const";
import { BookingController } from "../booking/booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validate";

const router = Router();

router.get(
    '/',
    auth(USER_ROLE.admin),
    BookingController.getAllBookings
);

router.post(
    '/',
    auth(USER_ROLE.user),
    validateRequest(BookingValidation.createBookingValidationSchema, "body"),
    BookingController.createBooking
);

router.put(
    '/:id',
    auth(USER_ROLE.admin),
    validateRequest(BookingValidation.updateBookingValidationSchema, "body"),
    BookingController.updateBooking
);

router.delete(
    '/:id',
    auth(USER_ROLE.admin),
    BookingController.deleteBooking
);

export const BookingRoute = router;

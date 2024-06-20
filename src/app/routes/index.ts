import { Router } from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { RoomRoute } from "../modules/room/room.route";
import { SlotRoute } from "../modules/slot/slot.route";
import { BookingRoute } from "../modules/booking/booking.route";
import { MyBooking } from "../modules/my-booking/my-booking.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/rooms',
        route: RoomRoute,
    },
    {
        path: '/slots',
        route: SlotRoute,
    },
    {
        path: '/bookings',
        route: BookingRoute,
    },
    {
        path: '/my-bookings',
        route: MyBooking,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;



import { Router } from "express";
import { UserRoute } from "../modules/users/user.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { RoomRoute } from "../modules/room/room.route";


// User Sign Up Route: /api/auth/signup (POST) done
// User Login Route: /api/auth/login (POST) done
// Create Room Route: /api/rooms (POST) done
// Get a Room Route: /api/rooms/:id (GET)
// Get All Rooms Route: /api/rooms (GET)
// Update Room Route: /api/rooms/:id (PUT)
// Delete a Room Route: /api/rooms/:id (PUT)
// Create Slot Route: /api/slots(POST)
// Get available slots Route: /api/slots/availability(GET)
// Create a Booking Route: /api/bookings (POST)
// Get All Bookings Route: /api/bookings (GET)
// Get User's Bookings Route: /api/my-bookings(GET)
// Update Booking Route: /api/bookings/:id (PUT)
// Delete Booking Route: /api/bookings/:id (DELETE)




const router = Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRouter
    },
    {
        path: "/rooms",
        route: RoomRoute
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;



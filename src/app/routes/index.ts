import { Router } from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { RoomRoute } from "../modules/room/room.route";
import { SlotRoute } from "../modules/slot/slot.route";


// User Sign Up Route: /api/auth/signup (POST) done
// User Login Route: /api/auth/login (POST) done
// Create Room Route: /api/rooms (POST) done
// Get a Room Route: /api/rooms/:id (GET) done
// Get All Rooms Route: /api/rooms (GET) done
// Update Room Route: /api/rooms/:id (PUT) done
// Delete a Room Route: /api/rooms/:id (PUT) done
// Create Slot Route: /api/slots(POST) done
// Get available slots Route: /api/slots/availability(GET) done

// Create a Booking Route: /api/bookings (POST)
// Get All Bookings Route: /api/bookings (GET)
// Get User's Bookings Route: /api/my-bookings(GET)
// Update Booking Route: /api/bookings/:id (PUT)
// Delete Booking Route: /api/bookings/:id (DELETE)




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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;



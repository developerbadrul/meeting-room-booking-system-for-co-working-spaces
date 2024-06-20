### Meeting Room Booking System for Co-working Spaces
## Live Server: https://assignment-3-p-hero.vercel.app

**Objective:**
Develop a web application to streamline the booking process for co-working spaces, allowing both admins and users to manage room reservations efficiently.

### Technology Stack:
- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** MongoDB
- **ODM and Validation Library:** Mongoose

### Models:

1. **User Model:**
   - `name`: String
   - `email`: String (unique)
   - `password`: String
   - `phone`: String
   - `address`: String
   - `role`: String (`user` or `admin`)

2. **Room Model:**
   - `name`: String
   - `roomNo`: Number (unique)
   - `floorNo`: Number
   - `capacity`: Number
   - `pricePerSlot`: Number
   - `amenities`: [String] (e.g., "Projector", "Whiteboard")
   - `isDeleted`: Boolean

3. **Slot Model:**
   - `room`: ObjectId (Reference to Room)
   - `date`: Date
   - `startTime`: String
   - `endTime`: String
   - `isBooked`: Boolean

4. **Booking Model:**
   - `room`: ObjectId (Reference to Room)
   - `slots`: [ObjectId] (References to Slot)
   - `user`: ObjectId (Reference to User)
   - `date`: Date
   - `totalAmount`: Number
   - `isConfirmed`: String (`confirmed`, `unconfirmed`, `canceled`)
   - `isDeleted`: Boolean

### Features:

#### Admin Actions:
- **Room Management:**
  - Create, update, and delete rooms.
  - Specify room details such as name, room number, floor number, capacity, price per slot, and amenities.

- **Slot Management:**
  - Create time slots for each room.
  - Specify date, start time, and end time for slots.

#### User Interactions:
- **Booking:**
  - Create bookings by selecting available slots for a desired date and room.
  - System calculates the total amount based on selected slots and their prices.
  - Real-time feedback on room and slot availability.

### Endpoints:

1. **User Routes:**
   - **Sign Up:** `POST /api/auth/signup`
   - **Login:** `POST /api/auth/login`

2. **Room Routes (Admin Only):**
   - **Create Room:** `POST /api/rooms`
   - **Get Room:** `GET /api/rooms/:id`
   - **Get All Rooms:** `GET /api/rooms`
   - **Update Room:** `PUT /api/rooms/:id`
   - **Delete Room (Soft Delete):** `DELETE /api/rooms/:id`

3. **Slot Routes (Admin Only):**
   - **Create Slot:** `POST /api/slots`
   - **Get Available Slots:** `GET /api/slots/availability`

4. **Booking Routes (Authenticated Users):**
   - **Create Booking:** `POST /api/bookings`

### Example JSON Payloads:

**User Sign Up:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "role": "user",
  "address": "123 Main Street, City, Country"
}
```

**Create Room:**
```json
{
  "name": "Conference Room",
  "roomNo": 201,
  "floorNo": 1,
  "capacity": 20,
  "pricePerSlot": 100,
  "amenities": ["Projector", "Whiteboard"]
}
```

**Create Slot:**
```json
{
  "room": "60d9c4e4f3b4b544b8b8d1c5",
  "date": "2024-06-15",
  "startTime": "09:00",
  "endTime": "14:00"
}
```

**Create Booking:**
```json
{
  "date": "2024-06-15",
  "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
  "room": "60d9c4e4f3b4b544b8b8d1c5",
  "user": "60d9c4e4f3b4b544b8b8d1c4"
}
```

This brief outlines the core functionality and technical details for the meeting room booking system, providing a clear understanding of the project's structure and capabilities.
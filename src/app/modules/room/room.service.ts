import RoomModel from './room.model';
import { IRoom } from './room.interface';

const createRoomInDb = async (roomData: IRoom) => {
    const room = new RoomModel(roomData);
    await room.save();
    return room;
}

const getRoomById = async (id: string) => {
    return await RoomModel.findById(id);
}


const getAllRoomsFromDb = async () => {
    const rooms = await RoomModel.find({ isDeleted: false });
    return rooms
}

const updateRoomInDb = async (id: string, roomData: Partial<IRoom>) => {
    const room = await RoomModel.findByIdAndUpdate(id, roomData, { new: true })
    return room
}

const deleteRoom = async (id: string) => {
    const room = await RoomModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
    return room;
}

export const RoomService = {
    createRoomInDb,
    getRoomById,
    getAllRoomsFromDb,
    updateRoomInDb,
    deleteRoom
}

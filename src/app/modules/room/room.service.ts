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


export const RoomService = {
    createRoomInDb,
    getRoomById
}

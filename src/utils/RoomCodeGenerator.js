import generateUniqueId from "generate-unique-id"; 

export const RoomCodeGenerator = (len)=>{
    try {
        const roomCode = generateUniqueId({
            length: len
        });
        console.log(roomCode);
        return roomCode;
    } catch (error) {
        throw error;
    }
}

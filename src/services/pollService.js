import { ClosePollById, CreateAPoll, GetPollByItsCode, GetUserPoll } from "../reposotory/pollRepository.js";
import { RoomCodeGenerator } from "../utils/RoomCodeGenerator.js";

export const CreatePollHandeler = async (poll,user) => {
    try {
        const poll1 = {
            question: poll.question,
            options: poll.options,
            code: RoomCodeGenerator(6),
            creator: user
        }
        console.log("poll",poll);
        const data = await CreateAPoll(poll1);

        return data;
    } catch (error) {
        throw error;
    }
}
/**  question: "Favorite language?",
  options: [
    { text: "JavaScript" },
    { text: "Python" },
    { text: "Java" },
  ],
  code: "K7P2QX",
  creator: "665e9a1b2c3d4e5f6a7b8c9d", // a real user's _id */

export const getMyPollHandler = async (user_id) => {
    try {
        const data = await GetUserPoll(user_id);

        if (!data) {
            throw {
                status: 400,
                messege: "poll not set",
                data: null
            }
        }else{
            return data;
        }
    } catch (error) {
        throw error;
    }
}

export const getPollByIDHandler = async (poll_code) => {
    try {
        const code = poll_code.toUpperCase();
        const data = await GetPollByItsCode(code);

        if (!data) {
            throw {
                status: 400,
                messege: "poll not set",
                data: null
            }
        }else{
            return data;
        }
    } catch (error) {
        throw error;
    }
}

export const closePollHandler = async (id) => {
    try {
        const data = await ClosePollById(id);

        if (data.status == "close") {
            throw {
                status: 404,
                messege: "poll already close",
            }
        }
        else if(!data){
            throw {
                status: 404,
                messege: "poll not found",
            }
        }
        else{
            return data;
        }
        
    } catch (error) {
        throw error;
    }
}
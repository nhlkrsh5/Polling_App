import { CreateAPoll } from "../reposotory/pollRepository.js";
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
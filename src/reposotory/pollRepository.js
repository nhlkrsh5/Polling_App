import Poll from "../model/Poll.js";

export const CreateAPoll = async (poll) => {
    try {
        const data = await Poll.create({
            question: poll.question,
            option: poll.options.map((text)=>({text})),
            code: poll.code,
            creator: poll.creator
        });

        return data;
    } catch (error) {
        throw error;
    }
}
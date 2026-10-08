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

export const GetUserPoll = async (creator_id) => {
    try {
        const polls = await Poll.find({creator: creator_id});
        return polls;
    } catch (error) {
        throw error;
    }
}

export const GetPollByItsCode = async (p_code) => {
    try {
        const poll = await Poll.findOne({code: p_code}).select({creator: 0});
        return poll;
    } catch (error) {
        throw error;
    }
}

export const ClosePollById = async (id) => {
    try {
        const poll = await Poll.findByIdAndUpdate({_id: id},{$set: {status: "close"}});
        return poll;
    } catch (error) {
        throw error;
    }
}

export const FindAPollByID = async (id) => {
    try {
        const poll = await Poll.findById(id);
        return poll
    } catch (error) {
        throw error;
    }
}

export const DeleteAPollByID = async (id) => {
    try {
        const poll = await Poll.findByIdAndDelete(id);
        return poll;
    } catch (error) {
        throw error;
    }
}
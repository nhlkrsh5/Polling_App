import { closePollHandler, CreatePollHandeler, getMyPollHandler, getPollByIDHandler } from "../services/pollService.js";
export const CreatePoll = async (req,res) => {
    try {
        const user = req.user.id
        const data = await CreatePollHandeler(req.body,user);
  
        if(!data){
            throw {
                status: 400,
                messege: "poll not set",
                data: data
            }
        }
        res.json({
            sucess: true,
            messege: "code working",
            data: data
        });
    } catch (error) {
        console.log("Error in Login!"+error);
        if(error.status){
            res.status(error.status).json(
            {
                success: false,
                messege: error.messeage,
                data: null
            }
        );
        }
    }
}

export const getMyPolls = async (req,res) => {
    try {
        const user = req.user.id;
        const polls = await getMyPollHandler(user);

        if (polls.length == 0) {
            throw {
                status: 400,
                messege: "poll not found",
                data: null
            }
        }else{
            res.json({
                success: true,
                messege: "Poll founded",
                data: polls
            });
        }
       
    } catch (error) {
        console.log("Error in Login!"+error);
        if(error.status){
            res.status(error.status).json(
            {
                success: false,
                messege: error.messege,
                data: null
            }
        );
        }
    }
}

export const getPollByCode = async (req,res) => {
    try {
        const code = req.params.code;
        const poll = await getPollByIDHandler(code);

        if (!poll) {
            throw {
                status: 400,
                messege: "poll not found",
                data: null
            }
        }else{
            res.json({
                sucess: true,
                messege: "Poll found",
                data: poll
            });
        }
       
    } catch (error) {
        console.log("Error in Login!"+error);
        if(error.status){
            res.status(error.status).json(
            {
                success: false,
                messege: error.messege,
                data: null
            }
        );
        }
    }
}


export const CloseAPoll = async (req,res) => {
    try {
        const id = req.params.id;
        
        const poll = await closePollHandler(id);
        res.json({
            success: true,
            messege: "Poll closed",
            data: poll
        });
    } catch (error) {
        console.log("Error in Login!"+error);
        if(error.status){
            res.status(error.status).json(
            {
                success: false,
                messege: error.messege,
                data: null
            }
        );
        }
    }
}
import { CreatePollHandeler } from "../services/pollService.js";
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
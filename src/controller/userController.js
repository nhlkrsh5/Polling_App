import { HandleUserRegister, VerifyUser } from "../services/userService.js";

export const UserRegister = async (req,res) => {
    
    
    try {
        const {username,email,password} = req.body;
        console.log("username",username);
        const user = await HandleUserRegister(username,email,password);
        if (user) {
            res.json(
                {
                    success: true,
                    messege: "User register",
                    data: user
                }
            );
        }
    } catch (error) {
      console.log("Error in registeration!"+error);
        
    }
}

export const UserLogin = async (req,res) => {
    try {
        const {email,password} = req.body;
        
        const user = await VerifyUser(req.body);
        if(user){
            res.json(
               {
                    success: true,
                    messege: "User register",
                    data: user
                }
            );
        }
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

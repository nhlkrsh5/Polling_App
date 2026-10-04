import { HandleUserRegister } from "../services/userService.js";

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
        )
        }
    } catch (error) {
      console.log("Error in registeration!"+error);
        
    }
}
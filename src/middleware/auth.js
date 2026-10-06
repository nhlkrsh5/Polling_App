import { UserExist } from "../services/userService.js";
import { VerifyTocken } from "../utils/jwt.js";

export const isAuthenticated = async (req,res,next) => {
    try {
        const tocken = req.headers["login-tocken"];

        if (!tocken) {
            res.status(401).json({
                messege: "Tocken requied"
             });
        }

        const response = await VerifyTocken(tocken)
        const doesUserExist = await UserExist(response.email);

        if(!response){
            return res.status(401).json({
                messege: "Tocken Invalid!"
            }); 
        }

        if(!doesUserExist){
            return res.status(401).json({
                messege: "User not exist!"
            });
        }
        
       //console.log("response form jwt",response); 
       req.user = response;
        next();
        
    } catch (error) {
        console.log("Authentication fails"+error);
        return res.status(401).json({
            messege: "Tocken Invalid"
        }); 
    }
}
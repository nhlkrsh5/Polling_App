import jwt from "jsonwebtoken";
import {jwt_secrate} from "../config/serverConfig.js"

console.log(jwt_secrate);

export const generateTocken = async (payload)=>{
    try {
        const tocken = jwt.sign(payload,jwt_secrate,{expiresIn:"1d"});
        return tocken;
    } catch (error) {
        throw error;
    }
}

export const VerifyTocken = async (tocken) => {
    try {
        const result = await jwt.verify(tocken,jwt_secrate);
        return result;
    } catch (error) {
        throw error;
    }
}
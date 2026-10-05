import { FindUserByItsEmail, UserRegistered } from "../reposotory/userRepository.js"
import bcrypt from "bcrypt";
import { generateTocken } from "../utils/jwt.js";

export const HandleUserRegister = async (username,email,password) => {

    try {
        const data = await UserRegistered(username,email,password);
        return data;
    } catch (error) {
        console.log("service error");
        
        throw {
            status: 401,
            messege: "user register problem",
            success: false,
            data: null
        }
    }
}

export const VerifyUser = async (data) => {
    try {
        const email = data.email;
        const plainPass = data.password;

        const user = await FindUserByItsEmail(email);

        if(user){

            /**
             * {
                "_id": "6ac2a0b86892a6754ccec594",
                "username": "Abrar chauhan",
                "email": "abrar@gmail.com",
                "password": "$2b$09$ly3txPYJfK09psjQNw8Afe.EHTTIqF6n0hOITlc0pvVPBWUZrsexa",
                "__v": 0
                }
             */
            const comparePassword = await bcrypt.compare(plainPass,user.password);

            if(comparePassword){
                const tocken = await generateTocken({
                    username: user.username,
                    email: user.email
                });
                return tocken;
            }else{
                throw {
                    status: 401,
                    messeage: "Password incorrect!"
                }   
            }     
        }else{
            throw {
                status: 401,
                messeage: "user not found"
            }
        }
    } catch (error) {
        throw error;
    }
}

export const UserExist = async (email) => {
    try {
        const user = await FindUserByItsEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}
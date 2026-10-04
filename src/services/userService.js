import { UserRegistered } from "../reposotory/userRepository.js"

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
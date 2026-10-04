import User from "../model/User.js"

export const UserRegistered = async (username,email,password) => {
    try {
        const data = await User.create({username,email,password});
        return data;
    } catch (error) {
             console.log("repo error");
        throw {
            status: 401,
            messege: "user register problem",
            success: false,
            data: null
        }
    }
}
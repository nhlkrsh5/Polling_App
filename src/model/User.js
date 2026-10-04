import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 20
    },
    email:{
        type: String,
        required: true,
        minLength: 10,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    }
});

userSchema.pre('save',function(){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const hasspass = bcrypt.hashSync(user.password,SALT);
    user.password = hasspass;

});
const user = mongoose.model("User",userSchema);

export default user;
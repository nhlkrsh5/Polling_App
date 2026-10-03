import {CONN} from "./serverConfig.js";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8'],['8.8.4.4'])
//console.log(CONN);

export default async function DBconnection() {
    try {
       await mongoose.connect(CONN);
       console.log("Connection success");

    } catch (error) {
        console.log("Connection problem!"+error);
    }
}
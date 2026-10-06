import express from "express";
import { isAuthenticated } from "../../middleware/auth.js";
import {CreatePoll} from "../../controller/pollController.js"
import multer from "multer";
const router = express.Router();

router.get("/",(req,res)=>{
    res.json(
        {
            success: true,
            message: "Poll Router"
        }
    )
});

router.post("/polls",multer().none(),isAuthenticated,CreatePoll);

export default router;
import express from "express";
import { isAuthenticated } from "../../middleware/auth.js";
import {CloseAPoll, CreatePoll, getMyPolls, getPollByCode} from "../../controller/pollController.js"
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
router.get("/polls",isAuthenticated,getMyPolls);
router.get("/polls/:code",getPollByCode);
router.patch("/polls/:id/close",isAuthenticated,CloseAPoll)

export default router;
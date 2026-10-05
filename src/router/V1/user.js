import express from "express";
import { UserLogin, UserRegister } from "../../controller/userController.js";
import multer from "multer";
import { isAuthenticated } from "../../middleware/auth.js";
const router = express.Router();

router.use(express.json());
router.use(express.text());
router.use(express.urlencoded({ extended: true }));

router.get("/",(req,res)=>{
    res.json(
        {
            success: true,
            message: "User Router"
        }
    )
});

router.post("/signin",multer().none(),UserRegister);
router.post("/signup",multer().none(),UserLogin);

router.post("/alive",multer().none(),isAuthenticated,(req,res)=>{
    res.json({
        messege: "alive"
    })
});

router.get("/currUser",isAuthenticated,(req,res)=>{
    res.json({
        success: true,
        message: "User found",
        currUser: req.user
    })
});

export default router;
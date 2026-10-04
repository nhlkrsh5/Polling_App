import express from "express";
import { UserRegister } from "../../controller/userController.js";
import multer from "multer";
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

export default router;
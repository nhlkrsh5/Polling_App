import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.json(
        {
            success: true,
            message: "Poll Router"
        }
    )
});

export default router;
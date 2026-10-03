import express from "express";
import userRouer from "./user.js"
import pollRouter from "./poll.js"
const router = express.Router();

router.use("/user",userRouer);
router.use("/poll",pollRouter);

export default router;
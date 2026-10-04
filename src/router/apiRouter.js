import express from "express";
import V1router from "./V1/V1router.js";
const router = express.Router();

router.use(express.json());
router.use(express.text());
router.use(express.urlencoded({ extended: true }));

router.use("/v1",V1router);

export default router;
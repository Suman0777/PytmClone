const express = require("express")
import userRouter from "./user.js"
const router = express.Router();

router.get("/user", userRouter);

export default router
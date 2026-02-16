import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./routes/user.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());

app.use("/api/users", userRouter)
const PORT = process.env.PORT || 5000
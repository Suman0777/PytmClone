import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mainRouter from "./routes/index.js"

dotenv.config()

const app = express()

app.use(cors())

//main Rote Controller 
app.use("/api/v1", mainRouter)



const PORT = process.env.PORT || 5000
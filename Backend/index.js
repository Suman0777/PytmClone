import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mainRouter from "./routes/index.js"

dotenv.config()

const app = express()

//The Cores and body pharser
app.use(cors())
app.use(express.json());


//main Rote Controller with version controll system 
app.use("/api/v1", mainRouter)


//Port initilization
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`server is running on port is ${PORT}`)
})
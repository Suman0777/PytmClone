import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URL)
.then(() => {
    console.log("Conenct db is connected")
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


const User = mongoose.model("User", UserSchema)
export default User
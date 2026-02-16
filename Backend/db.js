import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URL)
.then(() => {
    console.log("Conenct db is connected")
})

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    }
})


const User = mongoose.model("User", UserSchema)
export default User
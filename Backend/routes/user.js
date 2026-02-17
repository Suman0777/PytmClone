import express from "express"
import User from "../db.js";
import JWt from "jsonwebtoken";
import { JWT_SECRET_key } from "../config.js";
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("Server is Live ")
})

// fro user sign in

router.post("/signup", async (req, res)=>{
    
    try {
        const {username, password, firstName, lastName} = req.body;
        console.log(username);
        
        if(!username || !password || !firstName || ! lastName){
            res.status(404).json({
                "Msg" : "ncomplete data"
            })
        }
        else{
            //Insert the data into the db
            const newUSer = await User.create({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            
            //Token is created
            const createToken = JWt.sign({user_id: newUSer._id}, JWT_SECRET_key);
            console.log(createToken);
            res.json({
                msg: "Account created",
                createToken,
            })
        }
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
})


export default router
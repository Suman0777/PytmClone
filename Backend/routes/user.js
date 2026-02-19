import express from "express"
import User from "../db.js";
import JWt from "jsonwebtoken";
import { JWT_SECRET_key } from "../config.js";
import authMIddleware from "../auth.js";
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
            res.status(400).json({
                "Msg" : "Incomplete data"
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
            const createToken = JWt.sign({userId: newUSer._id}, JWT_SECRET_key);
            console.log(createToken);
            res.json({
                msg: "Account created",
                createToken,
            })
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

// for Login

router.post("/login", async(req, res)=>{
    const {username, password} = req.body;

    try {
        const isThere = await User.findOne({username, password});

        if(!isThere){
            return res.status(400).json({
                msg: "Invalid username or password"
            })
        }

        else{
            const token = JWt.sign({userId: isThere._id}, JWT_SECRET_key)
            res.status(200).json({
                token,
                success: true,
                msg: "User Has login"
            })
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            msg: error.message,
            success: false
        })
    }
})

// user for makeChanges in the profile using auth

router.put("/", authMIddleware , async (req, res)=>{
    const {password, firstName, lastName } = req.body;
    if(!password || !firstName || ! lastName) {
        res.status(411).json({
            message: "Error While updating the information"
        })
    }

    await User.updateOne({_id: req.userId}, req.body)

    res.json({
        Msg: "Updated Succcessfully"
    })
})


router.get("/bluck", async(req, res)=>{

    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex" : filter
            }
        }, {
            lastName: {
                "$regex" : filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
export default router


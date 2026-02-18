import { JWT_SECRET_key } from "./config.js";
import JWT from "jsonwebtoken"

const authMIddleware= (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({
            msg: "Token Invalid"
        })
    }
    const token = authHeader.split(' ')[1]

    try {
        const decode = JWT.verify(token, JWT_SECRET_key);

        if(decode.userId){
            req.userId = decode.userId;
            next();
        }
        else{
            res.status(403).json({
            msg: "userId not found"
        })
        }

    } catch (error) {
        console.log(error.message);
        res.status(403).json({
            msg: error.message
        })
    }
}
export default authMIddleware
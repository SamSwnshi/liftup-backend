import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next) =>{
    const token = req.header("Authorization")?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Access Denied!, NO Token provided!"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next()
    }catch(error){
        res.status(400).json({ message: 'Invalid token' }); 
    }
}
import express from "express";
import { User,generateAuthToken} from "../models/user.js";
import bcrypt from "bcrypt"

const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        
    
    let user=await User.findOne({email:req.body.email})
    if(user)return res.status(409).json({message:"email already exists"})


    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt)


    user=await new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    }).save();
    const token= generateAuthToken(user._id);
    res.status(201).json({message:"Successfully signed up",token})
} catch (error) {
    console.log(error)
      res.status(500).json ({message:"Internal server error"})
}
})

export const signupRouter=router;

import mongoose from "mongoose";

const{ObjectId}=mongoose.Schema

const contentSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            req:true,
        },
        price:{
            type:Number,
            req:true,
        },
        
      
        
       
           
            
    }
)
const Content=mongoose.model("content",contentSchema)
export {Content}

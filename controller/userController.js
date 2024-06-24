const User=require("../model/userModel")

const handelGetAllUsers =async (req,res)=>{
    try{
        const users=await User.find({});
        res.json(users)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports ={
    handelGetAllUsers
}
const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    id:{
        type: Number,
        required:true,
        unique:true,
    },
    first_name:{
        type:String,
        require:true
    },
    second_name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        required:true
    }

})
const User=mongoose.model('User',userSchema);
module.exports=User;
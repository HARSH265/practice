const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({

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
const User=mongoose.model('URL',userSchema);
module.exports=User;
const mongoose=require("mongoose");
const connectMongoDB =async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("mongoDb connected");
    }catch(error) {
            console.error(" failed to connect to mongodb")
            procrss.exit(1);
    }
}
module.exports ={
    connectMongoDB
}
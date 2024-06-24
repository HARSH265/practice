const express = require("express");
const app = express();
const { connectMongoDB } = require("./connection");
const userRoutes = require("./routes/userRoutes");

const PORT = 8000; 

const startServer = async () => { 
    try {
        await connectMongoDB("mongodb://127.0.0.1:27017/shorturldb");
        console.log("connected to db");

        app.use(express.json());

        app.use("/", userRoutes);
        
        app.listen(PORT, () => {
            console.log(`server is connected to port: ${PORT}`);
        });
    } catch (error) {
        console.error("failed to connect to MongoDB", error);  
    }
};

startServer();

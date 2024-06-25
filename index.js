const express = require("express");
const app = express();
const { connectMongoDB } = require("./connection");
const userRoutes = require("./routes/userRoutes");

const PORT = 8000;

const startServer = async () => {
    try {
        await connectMongoDB("mongodb://127.0.0.1:27017/shorturldb");
        console.log("Connected to MongoDB");

        app.use(express.json());

        app.use("/", userRoutes);

        app.listen(PORT, () => {
            console.log(`Server is connected to port: ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Corrected typo in process.exit()
    }
};

startServer();

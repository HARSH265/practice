const User = require("../model/userModel");

//-------------------- Get all users--------------------------------
const handleGetAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//------------------------------------------------------------------

//----------------------- Create user ------------------------------
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user); // Added status 201 for successful creation
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//------------------------------------------------------------------

//---------------------- Get user by id----------------------------
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//------------------------------------------------------------------

//---------------------update user --------------------------------

const handleUserUpdation = async(req,res)=>{
    try{
        const userId= req.params.id;
        const user = await User.findById(userId );
        if(!user){
            return res.status(404).json({error:"user not found"})
        }
        user.first_name=req.body.first_name
        user.second_name=req.body.second_name
        user.age=req.body.age
        await user.save();
        res.status(200).json({ user });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Server error' });

    }
}

//-----------------------------------------------------------------

//.....................delete user by id--------------------------- 

const handleDeleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await User.findByIdAndDelete(userId); // Corrected to pass userId instead of an object

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: "Failed to delete user" });
    }
};

// ----------------------------------------------------------

module.exports = {
    handleGetAllUsers,
    createUser,
    getUserById,
    handleDeleteUser,
    handleUserUpdation
};

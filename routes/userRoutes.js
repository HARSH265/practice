const express = require("express");
const router = express.Router();
const { handleGetAllUsers, createUser, getUserById, handleDeleteUser,handleUserUpdation } = require("../controller/userController");

// Get all users
router.get("/users", handleGetAllUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserById); // corrected the route path
router.delete("/users/:id", handleDeleteUser);
router.put("/users/:id",handleUserUpdation)
module.exports = router;

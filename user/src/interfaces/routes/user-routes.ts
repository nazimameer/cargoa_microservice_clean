import express from "express";
const router = express.Router();

// Import controllers
import { loginIn, registerUser, updateUser, deleteUser } from "../controllers";

// Define routes and associate them with controllers
router.post("/register", registerUser);
router.get("/users/:id", loginIn);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;

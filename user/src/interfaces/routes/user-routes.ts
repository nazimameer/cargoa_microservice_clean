import express from "express";
const router = express.Router();

// Import controllers
import { loginIn, registerUser } from "../controllers";

// Define routes and associate them with controllers
router.post("/register", registerUser);
router.post("/login", loginIn);
// router.get("/users/:id", loginIn);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
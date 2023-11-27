import express from "express";
const router = express.Router();

// Import controllers
import { logIn, allVendors, register } from "../controllers";

// Define routes and associate them with controllers
router.get("/vendors", allVendors);
router.post("/login", logIn);
router.post('/register', register)

export default router;
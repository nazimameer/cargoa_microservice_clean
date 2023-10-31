import express from "express";
const router = express.Router();

// Import controllers
import { logIn, getVendors } from "../controllers"

// Define routes and associate them with controllers
router.get("/vendors", getVendors);
router.post("/login", logIn);

export default router;
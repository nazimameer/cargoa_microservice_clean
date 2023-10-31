import express from "express";
const router = express.Router();

// Import controllers
import { logIn, getVendors } from "../controllers"

// Define routes and associate them with controllers
router.post("/login", logIn);
router.get("/vendors", getVendors);

export default router;
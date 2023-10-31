import express from "express";
const router = express.Router();

// Import controllers
import { logIn, allVendors } from "../controllers";

// Define routes and associate them with controllers
router.get("/vendors", allVendors);
router.post("/login", logIn);

export default router;
import express from "express";
const router = express.Router();
import { uplodDoc } from '../controller';
router.post('/upload', uplodDoc);


export default router;
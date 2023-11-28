import express from "express";
const router = express.Router();
import multer from 'multer';
const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });
import { uplodDoc } from '../controller';
router.post('/upload',upload.single('doc'), uplodDoc);


export default router;
import express from 'express';
import { config } from 'dotenv';
import { dbconnect } from './config/database';
config();

const startServer = async () => {
    try {
        const app = express();
        const port = process.env.PORT
        dbconnect();

        app.listen(port, () => {
            console.log(`User service is running on port: ${port}`);
        })
    } catch (error) {
        console.error('Error starting User Service:', error);
    }
}

startServer();
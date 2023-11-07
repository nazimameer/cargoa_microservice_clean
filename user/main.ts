import express, {json, urlencoded} from 'express';
import { config } from 'dotenv';
import { dbconnect } from './config/database';
import cors from 'cors';
import userRoutes from './src/interfaces/routes/user-routes'
config();

const startServer = async () => {
    try {
        const app = express();
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(cors())
        const port = process.env.PORT || 8001;
        dbconnect();
        app.use("/user", userRoutes);
        app.listen(port, () => {
            console.log(`User service is running on port: ${port}`);
        })
    } catch (error) {
        console.error('Error starting User Service:', error);
    }
}

startServer();
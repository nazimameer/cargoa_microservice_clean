import express, {json, urlencoded} from 'express';
import { config } from 'dotenv';
import { dbconnect } from './config/database';
import cors from 'cors';
import userRoutes from './src/interfaces/routes/user-routes'
config();

        const app = express();
        app.use(urlencoded({ extended: true }));
        app.use(json());
        app.use(cors())
        const port = process.env.PORT || 8001;
        dbconnect();
        app.use("/", userRoutes);
        app.listen(port, () => {
            console.log(`User service is running on port: ${port}`);
        })
import express, {json, urlencoded} from 'express';
import { config } from 'dotenv';
import { dbconnect } from './config/database';
import vendorRoutes from './src/interfaces/routes/vendor-routes'
config();

const startServer = async () => {
    try {
        const app = express();
        app.use(json());
        app.use(urlencoded());
        const port = process.env.PORT || 8002;
        dbconnect();
        app.use("/", vendorRoutes);
        app.listen(port, () => {
            console.log(`Vendor service is running on port: ${port}`);
        })
    } catch (error) {
        console.error('Error starting Vendor Service:', error);
    }
}

startServer();
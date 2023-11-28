import express,{ json, urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { dbconnect } from './config/database'
import docRoutes from './src/infrastructure/routes/doc-routes'
config();

        const app = express();
        app.use(urlencoded({ extended: true }));
        app.use(json());
        app.use(cors())
        const port = process.env.PORT || 8003;
        dbconnect();
        app.use("/", docRoutes);
        app.listen(port, () => {
            console.log(`Document service is running on port: ${port}`);
        })



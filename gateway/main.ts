import express, { json, urlencoded } from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';

const startServer = () => {
    try {
        const app = express();
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(cors())
        const port = process.env.PORT || 8000;
        
        // use Proxy
        app.use('/user', proxy("http://localhost:8001"))
        app.use('/vendor', proxy("http://localhost:8002"))

        app.listen(port, () => {
            console.log(`Vendor service is running on port: ${port}`);
        })
    } catch (error) {
        console.error('Error starting User Service:', error);
    }
}


startServer();
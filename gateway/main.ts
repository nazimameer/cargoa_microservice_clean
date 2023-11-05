import express, { json, urlencoded } from 'express';
import proxy from 'express-http-proxy';


const startServer = () => {
    try {
        const app = express();
        app.use(json());
        app.use(urlencoded);
        const port = process.env.PORT || 8000;
        
        // use Proxy
        app.use('/user', proxy("http://localhost:8001"))
        app.use('/vendor', proxy("http://localhost:8002"))

    } catch (error) {
        console.error('Error starting User Service:', error);
    }
}

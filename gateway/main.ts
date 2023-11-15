import express, { json, urlencoded } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
        const app = express();
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(cors())
        const port = process.env.PORT || 8000;

        // use Proxy
        const routes:{ [key: string]: string } = {
          '/user': 'http://localhost:8001',
          '/vendor': 'http://localhost:8002'
        } 
        for(const route in routes){
          const target = routes[route];
          app.use(route, createProxyMiddleware({target}))
        }
        app.use('/', (req, res) => {
          res.json({message: "from gateway"})
        })
       
        app.listen(port, () => {
            console.log(`Gateway service is running on port: ${port}`);
        })
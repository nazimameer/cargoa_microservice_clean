import gateway from 'fast-gateway';
        
        const port:number  = Number(process.env.PORT) || 8000;
        // use Proxy
        const server = gateway({
          routes:[
            {
              prefix: '/user',
              target: 'http://localhost:8001/',
            },

            {
              prefix: '/vendor',
              target: 'http://localhost:8002/',
            },

            {
                prefix: '/doc',
                target: 'http://localhost:8003/'
            }
          ]
        })
      
        server.use('/', (req, res) => {
          res.send("from gateway")
        })
       
        server.start(port).then(()=> {
          console.log(`gateway is running on port${port}`);
        })
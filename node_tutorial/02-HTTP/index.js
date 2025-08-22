const http = require("http");

const server = http.createServer(function (req, res) {
    console.log(`Incomming request at [${Date.now()}]`);
    // console.log(req.headers);
    // console.log(req.method);
    console.log(req.url);


     //..

    // res.writeHead(200);
    // // res.end('OK!');
    // res.end(`Hey, you can accept ${req.headers['accept-language']}`);



    switch(req.url){

        case '/':
            res.writeHead(200);
            return res.end('Homepage')
          
            case '/contact-us':
                res.writeHead(200);
                 return res.end('Contact Me at sunilmeghwal@gmail.com')
                 
                 case '/about':
                    res.writeHead(200);
                     return res.end('I am a webdeveloper')
                     

                     default:
                        res.writeHead(400);
                        return res.end("You're lost")


    }
    

   
});

server.listen(8000, () => console.log(`Server is running on Port: 8000`));

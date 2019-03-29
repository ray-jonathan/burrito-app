const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const Burrito = require('./models/burrito');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type','application/json');
    const path = req.url;
    const method = req.method;

if (method === "GET"){
    if (path === "gimmeburrito"){
        //getById
    }
    else if (path === "gimmeburritos"){
        //getAll
    }
    else{
        //404
    }
}

else if (method === "POST"){
    if (path === "makeburrito"){
        //makeMeABurrito
    }
    else{
        //404
    }
}

else if (method === "PUT"){
    if (path === "canichangemyburrito"){

    }
    else{
        //404
    }
}











});

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}:${port}`);
});
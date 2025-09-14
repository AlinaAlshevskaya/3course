var http = require('http');
var fs= require('fs');


http.createServer(function(request,response){
    
    let png= fs.readFileSync('./image.png');
    response.writeHead(200, {'Content-Type':'png'});
     if (request.url === "/png") {
    response.end(png);}
    else {
    response.end('<h1> Hello World<h1/>')  
    }
}).listen(3000);


console.log('Server running at http://localhost:3000/')
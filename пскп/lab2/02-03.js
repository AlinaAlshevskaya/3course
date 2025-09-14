var http = require('http');



http.createServer(function(request,response){
    
    
    
     if (request.url === "/api/name") {
        response.writeHead(200, {'Content-Type':'text/plain ;charset=utf-8'});
    response.end('Альшевская Алина Михайловна');}
    else {
        response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1> Hello World<h1/>')  ;
    }
}).listen(3000);


console.log('Server running at http://localhost:3000/')
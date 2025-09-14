var http = require('http');
var fs= require('fs');



http.createServer(function(request,response){
    
    let xtr=fs.readFileSync('./xmlhttprequest.html');
    
    if (request.url === "/xmlhttprequest"){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.end(xtr)  ;
    }
    else if (request.url === "/api/name") {
        response.writeHead(200, {'Content-Type':'text/plain ;charset=utf-8'});
    response.end('Альшевская Алина Михайловна');}
    else {
        response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1> Hello World<h1/>')  ;
    }
}).listen(5000);


console.log('Server running at http://localhost:5000/')
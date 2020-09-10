
var http=require('http');
var port=3000;
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end("Hello from NodeJS!");
}).listen(port);

console.log("Server running on http://localhost:"+port);

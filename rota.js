const http = require('http')
const url = require('url')

var callback = function(request, response) {
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.end("Site Principal");
    }else if (parts.path == "/rota1"){
        response.end("rota 1");
    }else if(parts.path == "/rota2"){
        response.end("rota 2");
    }else if(parts.path == "/rota3"){
        response.end("rota 3");
    }else {
        response.end("Rota Invalida");
    }
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor Iniciado");
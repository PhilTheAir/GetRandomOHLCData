const http = require('http');
const randomDataArray = require('./randomDataArray').randomDataArray;
const symbolList = require('./symbolList.json');
const serverPort = 8124;

http.createServer(function (request, response) {
    if (request.method === "GET") {
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
        if (request.url === "/getSymbolList") {
            response.end(JSON.stringify(symbolList));
        }
        else {
            response.end(JSON.stringify(randomDataArray()));
        }
    }
}).listen(serverPort);

console.log('Server running at localhost:' + serverPort);

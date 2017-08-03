const http = require('http');

const serverPort = 8124;

function randomDataArray() {
    let t = 1479999600000;
    let delta = 60000 * 5;
    let length = 5000;
    let startPrice = 30;
    let result = [];
    for (let i = 1; i <= length; i++) {
        let o = {};
        t += delta;
        o.u = t;
        let token1 = Math.random() > 0.5 ? 1 : -1;
        let token2 = Math.random() > 0.5 ? 1 : -1;
        let r1 = Math.random();
        let r2 = Math.random();
        let r3 = Math.random();
        let r4 = Math.random();
        let range = Math.abs(r1 - r2);
        o.o = startPrice + token1 * r3 * range;
        o.h = startPrice + Math.max(r1, r2);
        o.l = startPrice - Math.max(r1, r2);
        o.c = startPrice + token2 * r4 * range;
        o.v = Math.random() * 10000;
        startPrice = o.c;
        result.push(o);
    }
    return result;
}

http.createServer(function (request, response) {
    if (request.method === "GET") {
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
        response.end(JSON.stringify(randomDataArray()));
    }
}).listen(serverPort);

console.log('Server running at localhost:' + serverPort);

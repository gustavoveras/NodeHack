const http = require("http");
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end('Hack to the Future');

})


server.listen( 3000, "127.0.0.1", () => {

    console.log("O Server está rodando com sucesso em http://127.0.0.1:3000");

})
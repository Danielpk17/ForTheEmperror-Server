const http = require('http');

const servidor = http.createServer((req, res) => {
    if (req.url === '/') {
    res.writeHead(200, { 'content-type' : 'text/plain'});
    res.end('Hello Emperror');
}   else if (req.url === '/sobre') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Sobre o ForTheEmperror');
} else if (req.url === '/contato') {
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('daniel@fortheemperror.com');
} else {
    res.writeHead(404, { 'content-type': 'text/plain'});
    res.end('Página não encontrada');
}
});
    servidor.listen(3000, () => {
        console.log('Servidor Rodando na porta 3000') ;
    } );
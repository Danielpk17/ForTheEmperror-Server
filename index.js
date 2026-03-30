// const http = require('http');

// const servidor = http.createServer((req, res) => {
//     if (req.url === '/') {
//     res.writeHead(200, { 'content-type' : 'text/plain'});
//     res.end('Hello Emperror');
// }   else if (req.url === '/sobre') {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Sobre o ForTheEmperror');
// } else if (req.url === '/contato') {
//     res.writeHead(200, { 'content-type': 'text/plain'});
//     res.end('daniel@fortheemperror.com');
// } else {
//     res.writeHead(404, { 'content-type': 'text/plain'});
//     res.end('Página não encontrada');
// }
// });
//     servidor.listen(3000, () => {
//         console.log('Servidor Rodando na porta 3000') ;
//     } );

const express = require('express');
const app = express();
const soldados = [
    {id: 1, nome: 'DARTH VANDER', cargo: 'ANILIQUILADOR'},
    {id: 2, nome: 'LUCAS SKYWALKER', cargo: 'SALVADOR'},
    {id: 3, nome: 'TINUS EMPERROR', cargo: 'REGENTE'},
]

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: 'Hello Emperror'})
});

app.get('/soldado', (req, res) => {
    res.json(soldados);
});

app.post('/soldado', (req, res) => {
    const novoSoldado = req.body;
    soldados.push(novoSoldado);
    res.status(201).json(novoSoldado);
}) 

app.put('/soldado/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = soldados.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Soldado não encontrado' });
    }

    soldados[index] = {...soldados[index], ...req.body };
    res.json(soldados[index]);
});

app.delete('/soldado/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = soldados.findIndex(s => s.id === id);
    
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Soldado não encontrado' });
    }
    
    soldados.splice(index, 1);
    res.json({ mensagem: 'Soldado eliminado' });
});

app.listen(3000, () => {
    console.log('Servidor do emperror rodando na porta 3000');
});
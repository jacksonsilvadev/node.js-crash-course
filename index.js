const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
    res.end('<h1>Home</h1>');
    if (req.url === '/about')
        res.end('<h1>About</h1>')
    if (req.url === '/node')
        res.end('<h1>I love Node.js</h1>');
});

// Process é um metódo do Node aonde faz com que consigamos pegar o estado atual global da minha aplicação (Node.js);
// process.env.PORT pega a porta do web server, caso ela não exista será utilizado o número informado

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
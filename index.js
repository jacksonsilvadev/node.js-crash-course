const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, page) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.end(page);
        });
    };
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, page) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.end(page);
        });
    }



});

// Process é um metódo do Node aonde faz com que consigamos pegar o estado atual global da minha aplicação (Node.js);
// process.env.PORT pega a porta do web server, caso ela não exista será utilizado o número informado

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
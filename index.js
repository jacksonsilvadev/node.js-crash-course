const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/' || req.url === '/home') {
    //     // Buscando o directorio e atribuindo a pagina HTML para resposta ao response
    //     fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, page) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         });
    //         res.end(page);
    //     });
    // };
    // if (req.url === '/about') {

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, page) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         });
    //         res.end(page);
    //     });
    // }

    // // Criando um JSON na mão
    // if (req.url === '/api/users') {
    //     const users = [{
    //             name: 'Bob Smith',
    //             age: 40
    //         },
    //         {
    //             name: 'Jackson Silva',
    //             age: 19
    //         },
    //         {
    //             name: 'Lucas Andrade',
    //             age: 23
    //         },
    //     ];

    //     res.writeHead(200, {
    //         'Content-type': 'application/json'
    //     });
    //     // Utilizar JSON.stringify quando for um json devido as requisições só aceitarem esse tipo!
    //     res.end(JSON.stringify(users));
    // }

    // Find file path dynamically
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'home.html' : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Inicial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Check if contentType is text/html but no .html extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // Read File
    fs.readFile(filePath, (err, page) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, page) => {
                    res.writeHead(200, {
                        'Content-type': 'text/html'
                    });
                    res.end(page, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, {
                'Content-type': contentType
            });

            res.end(page, 'utf8');
        }


    })
});

// Process é um metódo do Node aonde faz com que consigamos pegar o estado atual global da minha aplicação (Node.js);
// process.env.PORT pega a porta do web server, caso ela não exista será utilizado o número informado

server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${PORT}`));
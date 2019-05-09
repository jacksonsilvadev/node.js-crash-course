const http = require('http');

// Create server object
http.createServer((req, res) => {
    res.write('Helo World!');
    res.end()
}).listen(3000, () => console.log('Server running...'))
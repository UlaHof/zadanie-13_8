var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, html) {
            if (err) {
                throw err;
            }   response.write(html);
                response.end();
        });
    } else {
        response.setHeader("Content-Type", "image.jpg");
        response.statusCode = 404;
        fs.readFile('./images/notFound/notfound.jpg', function (err, img) {
            if (err) {
                throw err;
            }   response.write(img);
                response.end();
        });
    }
});
server.listen(8080);
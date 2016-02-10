var http = require('http'),
    fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) { 
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error'); 
        } else {
            res.writeHead(responseCode,{ 'Content-Type': contentType });
            res.end(data); 
        }
    });
};



http.createServer(function(req,res){
// normalize url by removing querystring, optional
// trailing slash, and making lowercase
var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
    switch(path) {
        case '':
            serveStaticFile(res, '/public/view/home.html', 'text/html'); 
        break;
        case '/about':
            serveStaticFile(res, '/public/view/about.html', 'text/html'); 
        break;
        case '':
            serveStaticFile(res, '/public/img/logo.jpg','image/jpeg'); 
        break;
        default:
            serveStaticFile(res, '/public/view/notfound.html', 'text/html', 404); 
        break;
 }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
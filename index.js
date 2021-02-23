const http = require('http');

http.createServer((req, res)=>{
req.write("Hello World \n");
res.end();
}).listen(8000);
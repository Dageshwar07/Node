const http = require('http');
const server = http.createServer((req, res)=>{
    res.setHeader('content-Type','text/plain');
    res.end('rosponse 1');
});
const PORT =process.env.PORT||3000;
const HOST = 'localhost';
server.listen(3000,PORT,HOST,()=>{
    console.log('server runnnning at 3000')
}); 
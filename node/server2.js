const http =require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
    console.log('request has been made from browser');
    console.log(req.method);
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    res.write("hello");

    fs.readFile('./view/index.html',(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })
    // res.end();
});


server.listen(5000,'localhost',()=>{
    console.log('server is listening port 5000');


});
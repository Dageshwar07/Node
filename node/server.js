const http =require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
    console.log('request has made from browser');
    console.log(req.method);
    console.log(req.url);

    res.setHeader('Content-Type','text/html');
let path ='./view/index.html';
// switch(req.url){
// case '/index': 

//     path+='/index.html'
//     res.statusCode=200;
//     break;
//     case '/about':
//         path+='/about.html'
//     res.statusCode=200;

//         break;
//         case '/contact':
//             path+='/contact.html'
//     res.statusCode=200;

//             break;
//             default:



// }
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })

});


server.listen(5000,'localhost',()=>{
    console.log('server is listening port 5000');


});
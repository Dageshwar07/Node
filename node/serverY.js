const http=require('http');
// console.log(http);
const fs = require('fs');
// console.log(fs);
const server = http.createServer((Request,Response)=>{
console.log("request has made from browser");
console.log(Request.method);
// console.log(Response.method);

console.log(Request.url);

Response.setHeader('content-Type','text-html');
let path='./vievY/indexY.html';

switch(Request.url){
case '/about': 

    path+='/aboutY.html'
    Response.statusCode=200;
    break;
    
        
            default:
                case '/404Y':
        path+='/404Y.html'
    Response.statusCode=404;

        break;



}



fs.readFile(path,(err,fileData)=>{
    if(err){
        console.log(err);
    }
    else{
        Response.write(fileData);
        Response.end();
    }
})
})
server.listen(3000,'localhost',()=>{
    console.log('server is listening port 3000');

})
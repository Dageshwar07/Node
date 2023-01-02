const express =require('express');
const app = express();
app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('C:/Users/Dageshwar/Desktop/node/vievY/indexY.html');
});


app.get('/about',(req,res)=>{
    res.sendFile('C:/Users/Dageshwar/Desktop/node/vievY/aboutY.html');
});

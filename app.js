const express = require('express');
const http = require('http')
const app = express();
const path = require('path')
const server = http.createServer(app);
server.listen(8004);

app.use((req,res,next)=>{
    res.status(200);
   next();
})
app.get('^/$|/index.html',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','index.html'))
})


const one = (req,res,next) => {
     console.log("first")
     next()
}
const two = (req,res,next) => {
    console.log("seond")
    res.send("api")

}
app.get('/api',[one,two])


app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
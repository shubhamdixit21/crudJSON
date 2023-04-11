const express = require('express');
const server = express();
const user = require('./route/user')

server.get('/health',(req,res)=>{
        res.status('Health checkup API')
})

server.use(express.json())
server.use("/user",user)

server.listen(3000,function(){
        console.log("Server is running on port 3000");
})
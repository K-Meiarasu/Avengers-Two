const express = require('express');

const app = express();
app.use(express.static('public'))

app.listen(8081);

app.get("/",(request,response)=>{

response.sendFile(__dirname+'/index.html');
})
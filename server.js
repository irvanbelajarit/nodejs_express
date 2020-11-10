const express = require('express');

const path = require('path');

const app = express();

const port =3000;

app.use(express.static(path.join(__dirname,'./static')));

app.get('/',(request,response)=>{

    // response.send("hello world express");

    response.sendFile(path.join(__dirname,'./static/index.html'));
});

app.listen(port,()=>{
    console.log(`express server listening on port ${port}! `)
});
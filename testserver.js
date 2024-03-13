const express=require('express');
require('dotenv').config()
const path = require('path');
const app=express();
const port=process.env.PORT;
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/style.css'));
});
app.listen(8084,()=>{
    console.log("App listening", 8083)
})

module.exports = app;

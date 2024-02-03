const express=require('express');
require('dotenv').config()
const app=express();
const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("HII VAnsh GAba Deploy")
})
app.listen(8082,()=>{
    console.log("App listening", 8082)
})


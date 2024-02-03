const express=require('express');
require('dotenv').config()
const app=express();
const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("HII VAnsh GAba Deploy")
})
app.listen(3000,()=>{
    console.log("App listening", 3000)
})


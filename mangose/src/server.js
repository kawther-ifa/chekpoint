const express=require("express");
const app=express()
const connectDB=require('./config/connectDB.js');
connectDB()

app.listen(4000,(err)=>{
    console.log("server is running on port 4000");
});
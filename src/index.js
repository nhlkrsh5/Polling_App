import express from "express";
const app = express();
const port = 3000;

app.get("/ping",(req,res)=>{
    res.json({
        success: true,
        message: "Pong"
    });
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
import express from "express";
import apiRouter from "./router/apiRouter.js"
const app = express();
import DBconnection from "./config/DBconfig.js";
const port = 3000;


app.use("/api",apiRouter);
app.get("/ping",(req,res)=>{
    res.json({
        success: true,
        message: "Pong"
    });
});

app.listen(port,()=>{
    DBconnection();
    console.log(`Running on port ${port}`);
});
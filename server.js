import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(cookieParser())

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
})


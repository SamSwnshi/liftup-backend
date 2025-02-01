import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/auth.routes.js"
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(cookieParser())

app.use("/api",userRoutes)

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
})


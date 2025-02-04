import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/auth.routes.js"
import exerciseRoutes from "./routes/exercise.routes.js";
import  connectDB  from "./db/config.js";
dotenv.config();

const port = process.env.PORT;

const app = express();

connectDB()

app.use(express.json());  
app.use(cors());
app.use(cookieParser())


app.use("/api",userRoutes)
app.use("/api",exerciseRoutes)

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
})


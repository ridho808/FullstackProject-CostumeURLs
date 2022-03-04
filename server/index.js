import express from "express";
import db from './db.js'
import router from "./routers/router.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config()
const app = express();
app.use(cors({credential:true,origin:'http://localhost:3000'}))
app.use(express.json());
app.use(router)
try {
    db.authenticate();
    console.log("oke")
} catch (error) {
    
}

app.listen(process.env.PORT ||7888,()=>{
    console.log(`server running at http://localhost:${7888}`)
})
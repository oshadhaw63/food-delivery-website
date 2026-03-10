import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodROuter from "./routes/foodRoute.js";


// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodROuter)

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})

//mongodb+srv://oshadhaw63:Legendsky63@cluster0.c6h62hs.mongodb.net/?appName=Cluster0
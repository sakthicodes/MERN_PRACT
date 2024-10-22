import express from "express";
import router from "./routes/back.route.js";
import connectDB from "./config/connectDB.js";
const app = express();
const port = 8002;

// crud funtions

connectDB();
app.use('/users',router)
app.listen(port);

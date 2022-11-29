import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";

const app = express();
 
// connect ke database mongoDB
mongoose.connect("mongodb://127.0.0.1/restful_db",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors());
app.use(express.json());
app.use('/product',route);
 
// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));
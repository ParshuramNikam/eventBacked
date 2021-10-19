import express from 'express';
import cors from 'cors';
import dbConnection from './config/db.config.js';
import router from './routes/routes.js';

const app = express();
dbConnection();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).send("HOME PAGE OF BACKEND");
}) 

app.use("/api", router);

app.listen(5000, ()=>{
    console.log(`listening on 5000 PORT`);
})
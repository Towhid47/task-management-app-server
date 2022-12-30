const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8ro0fiu.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
     try{
         const myTaskCollection = client.db("task-daily24").collection("my-task");

         ////// Get Data from myTask
     }
     finally{

     }
}
run().catch(error => error.message);



app.get('/', async(req,res)=>{
    res.send('Task Daily24 server is Running');
})

app.listen(port, ()=> console.log(`Task Daily server is running on ${port}`));
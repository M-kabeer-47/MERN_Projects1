import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { ServerApiVersion, MongoClient } from 'mongodb';
import cors from "cors";
const uri = "mongodb+srv://User1:byoabD1X2y7KzU2I@e-commerce.kopglez.mongodb.net/";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  }
});

async function fetchCategory(category) {
  try {
    
    await client.connect();
    const database = client.db("E-Commerce");
    const collection = database.collection("processors");
    let products = await collection.find({}).toArray();
    console.log(products);
    await client.close();  
    return products;
   

  }
  catch(er){
    console.log(er);
  }
}



const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post("/products",async(req,res)=>{

        let {category} = req.body
        console.log(category);
        let categoryObject = await fetchCategory(category)
        res.send(categoryObject);


})
app.listen(3000,(req,res)=>{
    console.log("Server is listening on Port 3000");
    
})
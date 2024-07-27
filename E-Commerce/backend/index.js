import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { ServerApiVersion, MongoClient,ObjectId } from 'mongodb';
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
    
    const collection = database.collection("Products");
    const products = await collection.find({url: category}).toArray();
    
    if(products.length===0)
    {
      console.log("yoo");
      await client.close();  
      return false;
    }
    else{
      
    return products;
    }
  }
  catch(er){
    return false;
  }
}

async function fetchProduct(id){
  await client.connect();
  const database = await client.db("E-Commerce");
  let ID = new ObjectId(id)
console.log(ID);
  let product =  await database.collection("Products").findOne({_id:  ID})
  console.log(product);
return product;
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/product/:id", async (req, res) => {
  
  const {id} =req.params
  console.log(id);
  try {

    const product = await fetchProduct(id)
    if (product) {
      console.log("yo");
      res.send(product);
    } else {
      res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    console.error("Error handling GET /product/:category/:id:", error);
    res.status(500).json({ error: "An error occurred while fetching the product." });
  }
});

app.get("/products/:category",async(req,res)=>{
        let {category} = req.params
        console.log(category);
        
        let categoryObject = await fetchCategory(category)
        if(categoryObject === false){
          res.send(false);  
        }
        else{
          res.send(categoryObject);
        }
        


})
app.get("/search/:text",async(req,res)=>{
  let {text} = req.params
  text = String(text)
  console.log(text);
  await client.connect();
  const database = client.db("E-Commerce");
  const products = await database.collection("Products").find({
    $or: [
      { name: { $regex: text, $options: 'i' } },
      { category: { $regex: text, $options: 'i' } }
    ]
  }).toArray();
  
  if(products.length===0){
    res.send(false)
  }
  else{
    res.json(products)
  }
})
app.listen(3000,(req,res)=>{
    console.log("Server is listening on Port 3000");
    
})
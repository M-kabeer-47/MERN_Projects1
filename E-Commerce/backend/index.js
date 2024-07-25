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
    
  }
}



const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/product/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  try {
    console.log(`Fetching product with ID: ${id} from category: ${category}`);
    const products = await fetchCategory(category);
    const product = products.find(p => p._id.toString() === id);

    if (product) {
      res.json(product);
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

app.listen(3000,(req,res)=>{
    console.log("Server is listening on Port 3000");
    
})
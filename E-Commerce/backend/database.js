import { ServerApiVersion, MongoClient } from 'mongodb';

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
      const mouse = await database.collection("mouse").find({}).toArray()
      const allProducts = [...mouse]
      await database.collection("Products").insertMany(allProducts);
      console.log("Done");
      await client.close();  
    
     
  
    }
    catch(er){
      
    }
  }
  fetchCategory("hdds");
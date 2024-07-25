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
      const monitors =  await database.collection("monitors").find({}).toArray();
      const graphicCards = await  database.collection("graphic-cards").find({}).toArray();
      const powerSupply =  await database.collection("power-supply").find({}).toArray();
      const playstation =  await database.collection("playstation").find({}).toArray();
      const headphones = await  database.collection("headphones").find({}).toArray();
      const cases =  await database.collection("cases").find({}).toArray();
      const processors = await  database.collection("processors").find({}).toArray();
      const allProducts = [...monitors,...cases,...powerSupply,...playstation,...graphicCards,...headphones,...processors];
      await database.collection("Products").insertMany(allProducts);
      console.log("Done");
      await client.close();  
    
     
  
    }
    catch(er){
      
    }
  }
  fetchCategory("hdds");
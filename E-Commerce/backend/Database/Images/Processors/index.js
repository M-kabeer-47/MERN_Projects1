import { ServerApiVersion, MongoClient } from 'mongodb';

const uri = "mongodb+srv://User1:byoabD1X2y7KzU2I@e-commerce.kopglez.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    
    // Access the default database provided in the URI
    const database = client.db("E-Commerce");
    
    // Access the "processors" collection
    const collection = database.collection("Headphones");
    await collection.insertMany([
      {
        name: "Sony WH-1000XM4",
        price: "PKR 45,000",
        category: "Headphones",
        rating: 4.8,
        description: "Wireless noise-canceling headphones with superior sound quality and long battery life.",
        imageUrl: "./images/sony.png",
        longDescription: [
          "Industry-leading noise canceling",
          "Up to 30 hours battery life",
          "Touch sensor controls",
          "Speak-to-chat technology",
          "Adaptive sound control",
          "High-resolution audio"
        ],
        quantity: 500
      },
      {
        name: "Bose QuietComfort 35 II",
        price: "PKR 40,000",
        category: "Headphones",
        rating: 4.7,
        description: "Wireless noise-canceling headphones with Alexa voice control and balanced sound.",
        imageUrl: "./images/bose.png",
        longDescription: [
          "World-class noise cancellation",
          "Alexa-enabled",
          "Balanced audio performance",
          "Up to 20 hours battery life",
          "Comfortable fit",
          "Noise-rejecting dual-microphone system"
        ],
        quantity: 500
      },
      {
        name: "Sennheiser HD 660 S",
        price: "PKR 50,000",
        category: "Headphones",
        rating: 4.6,
        description: "Open-back audiophile headphones with high-resolution sound and comfortable design.",
        imageUrl: "./images/sennheiser.png",
        longDescription: [
          "Open-back design",
          "Improved transducers",
          "Low impedance",
          "Comfortable ear pads",
          "High-resolution sound",
          "Detachable cables"
        ],
        quantity: 500
      },
      {
        name: "SteelSeries Arctis 7",
        price: "PKR 25,000",
        category: "Headphones",
        rating: 4.5,
        description: "Wireless gaming headset with surround sound and comfortable design for long sessions.",
        imageUrl: "./images/steelseries.png",
        longDescription: [
          "2.4GHz wireless connection",
          "DTS Headphone:X v2.0 surround sound",
          "ClearCast microphone",
          "Up to 24 hours battery life",
          "Comfortable ear cushions",
          "On-ear audio controls"
        ],
        quantity: 500
      },
      {
        name: "HyperX Cloud II",
        price: "PKR 18,000",
        category: "Headphones",
        rating: 4.6,
        description: "Gaming headset with virtual 7.1 surround sound and comfortable memory foam ear cushions.",
        imageUrl: "./images/hyperx.png",
        longDescription: [
          "Virtual 7.1 surround sound",
          "53mm drivers",
          "Comfortable memory foam ear cushions",
          "Durable aluminum frame",
          "Detachable noise-canceling microphone",
          "Compatible with multiple platforms"
        ],
        quantity: 500
      },
      {
        name: "Audio-Technica ATH-M50x",
        price: "PKR 22,000",
        category: "Headphones",
        rating: 4.7,
        description: "Professional studio monitor headphones with exceptional clarity and sound isolation.",
        imageUrl: "./images/audio.png",
        longDescription: [
          "45mm large-aperture drivers",
          "Exceptional clarity",
          "Sound isolation",
          "90-degree swiveling earcups",
          "Professional-grade earpad and headband material",
          "Detachable cables"
        ],
        quantity: 500
      },
      {
        name: "Razer Kraken X",
        price: "PKR 10,000",
        category: "Headphones",
        rating: 4.4,
        description: "Ultra-light gaming headset with 7.1 surround sound and comfortable fit.",
        imageUrl: "./images/razer.png",
        longDescription: [
          "Ultra-light at 250g",
          "7.1 surround sound",
          "Custom-tuned 40mm drivers",
          "Comfortable memory foam ear cushions",
          "Flexible, bendable microphone",
          "Durable construction"
        ],
        quantity: 500
      },
      {
        name: "Corsair HS70 Pro",
        price: "PKR 20,000",
        category: "Headphones",
        rating: 4.5,
        description: "Wireless gaming headset with 7.1 surround sound and comfortable memory foam ear pads.",
        imageUrl: "./images/corsair.png",
        longDescription: [
          "2.4GHz wireless connection",
          "7.1 surround sound",
          "50mm neodymium drivers",
          "Memory foam ear pads",
          "Detachable noise-canceling microphone",
          "Up to 16 hours battery life"
        ],
        quantity: 500
      },
      {
        name: "Asus ROG Delta",
        price: "PKR 28,000",
        category: "Headphones",
        rating: 4.6,
        description: "Gaming headset with Hi-Res ESS Quad-DAC and customizable RGB lighting.",
        imageUrl: "./images/asus.png",
        longDescription: [
          "Hi-Res ESS Quad-DAC",
          "Customizable RGB lighting",
          "Detachable, unidirectional boom microphone",
          "Ergonomic D-shaped ear cups",
          "Compatible with multiple platforms",
          "Tough, lightweight construction"
        ],
        quantity: 500
      },
      {
        name: "Logitech G Pro X",
        price: "PKR 24,000",
        category: "Headphones",
        rating: 4.8,
        description: "Gaming headset with Blue VO!CE microphone technology and advanced sound features.",
        imageUrl: "./images/logitech.png",
        longDescription: [
          "Blue VO!CE microphone technology",
          "50mm PRO-G drivers",
          "Comfortable memory foam earpads",
          "Durable steel and aluminum construction",
          "Advanced sound features",
          "Detachable cable"
        ],
        quantity: 500
      }
    ]
    )
    // Insert a document into the collection
  
    console.log("Document inserted successfully.");
    
    console.log("Connected to MongoDB and inserted a document into 'processors' collection.");
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    

// Replace the uri string with your connection string.
const uri = "mongodb+srv://prateek212:@Pr02062000@cluster0.lftqhsy.mongodb.net/";

const client = new MongoClient(uri);

  try {
    const database = client.db('stock');
    const stk = database.collection('stk');

    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const allProducts = await stk.find(query).toArray();

    return NextResponse.json({allProducts})

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://prateek212:@Pr02062000@cluster0.lftqhsy.mongodb.net/";
    let body=request.body
    const client = new MongoClient(uri);
    
      try {
        const database = client.db('stock');
        const stk = database.collection('stk');
    
        // Query for a movie that has the title 'Back to the Future'
        const query = {  };
        const product = await stk.insertOne(body)
    
        return NextResponse.json({product,ok:true})
    
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
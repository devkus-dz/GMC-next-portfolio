// app/api/projects/route.ts

import clientPromise from '../../../lib/mongodb'; // Note: Adjust path based on your lib folder's location
import { MongoClient, WithId, Document } from 'mongodb'; 

// We define the handler as an async function named GET
// This function will handle all HTTP GET requests to /api/projects
export async function GET(request: Request) {
  try {
    // 1. Await the cached client connection
    const client: MongoClient = await clientPromise;
    
    // --- CONSOLE LOG CHECK (FIXED) ---
    // This log will appear in your server terminal when the route is hit.
    console.log(`📡 MongoDB Client Status: Connection successful and ready for use.`);
    // --- END CHECK ---

    // 2. Specify the database
    const db = client.db(process.env.MONGODB_DB);

    // 3. Attempt to fetch all documents from the 'projects' collection
    // Note the return type: WithId<Document>[]
    const projects: WithId<Document>[] = await db
      .collection('projects') 
      .find({})
      .toArray();
      
    const message = projects.length > 0 
        ? `Successfully connected and retrieved ${projects.length} projects.` 
        : "Connected, but the 'projects' collection is empty.";

    console.log(`Database message: ${message}`);

    // 4. Return the data using the standard Web Response object
    return new Response(
      JSON.stringify({ 
        status: 'success', 
        message: message,
        data: projects
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    console.error('❌ MongoDB Connection Error:', error);
    
    // Return a 500 error response
    return new Response(
      JSON.stringify({ 
        status: 'error', 
        message: 'Database connection failed or query failed. Check your server terminal for the detailed error log.',
        errorDetail: errorMessage
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// You can export other methods like POST, PUT, DELETE here as well.
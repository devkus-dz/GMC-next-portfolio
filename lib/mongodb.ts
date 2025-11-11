// lib/mongodb.ts

import { MongoClient, Db } from 'mongodb';

// Define the environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Define a type for the cached client promise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // Use a global variable to cache the client promise in development
  if (!global._mongoClient) {
    client = new MongoClient(uri);
    global._mongoClient = client.connect().then(c => {
        console.log("✅ MongoDB Atlas: Initial development connection established."); 
        return c;
    });
  }
  clientPromise = global._mongoClient;
} else {
  // In production, create a new connection client promise
  client = new MongoClient(uri);
  clientPromise = client.connect().then(c => {
    console.log("✅ MongoDB Atlas: Production connection established.");
    return c;
  });
}

/**
 * Returns the cached MongoClient promise for MongoDB connection.
 * @returns {Promise<MongoClient>}
 */
export default clientPromise;
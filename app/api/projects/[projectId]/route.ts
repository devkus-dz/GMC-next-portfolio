import clientPromise from '../../../../lib/mongodb'; 
import { MongoClient, ObjectId } from 'mongodb'; 
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ projectId: string }> }
) {

  const { projectId } = await params;

  if (!projectId) {
     return new Response(
        JSON.stringify({ status: 'error', message: "Missing project ID in request path." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
     );
  }

  try {
    const client: MongoClient = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // CRITICAL: MongoDB uses ObjectId for _id, which must be cast here.
    const objectId = new ObjectId(projectId);

    const project = await db
      .collection('projects')
      .findOne({ _id: objectId }); // Find by the BSON ObjectId

    if (!project) {
      return new Response(
        JSON.stringify({ status: 'error', message: `Project with ID ${projectId} not found.` }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Success: Return the project document
    return new Response(
      JSON.stringify({ status: 'success', data: project }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    console.error('❌ Single Project API Error:', errorMessage);

    return new Response(
      JSON.stringify({ 
        status: 'error', 
        message: 'Internal server error during database query.',
        errorDetail: errorMessage
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
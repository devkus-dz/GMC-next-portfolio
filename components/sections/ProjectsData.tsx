// [Your file location, e.g., app/components/ProjectsData.tsx]

// 1. Remove 'fs' import (no longer needed)
// import { promises as fs } from 'fs'; 
import Project from "../ui/Project";
import Link from 'next/link';

// 2. Define the exact structure returned by your API route's 'data' field.
interface Project {
    // NOTE: MongoDB uses '_id', not 'id'. We must update the interface and the map key.
    _id: string; // Changed from 'id: number' to '_id: string' for MongoDB
    icon: string;
    project_name: string;
    description: string;
    // Removed 'id' field, as MongoDB uses '_id'
}

// 3. Define the expected API response structure
interface ApiResponse {
    status: 'success' | 'error';
    message: string;
    data: Project[]; // The array of projects
}

// 4. Update the data fetching function to use the internal API route
const getProjects = async (): Promise<Project[]> => {
    // IMPORTANT: Fetching from a Server Component should use the full URL 
    // or a relative path, which Next.js optimizes for server-to-server calls.
    const apiRoute = `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`; 

    try {
        // We use 'no-store' to ensure data is fresh on every request during development.
        const response = await fetch(apiRoute, { cache: 'no-store' }); 

        if (!response.ok) {
            // Log the failure in the server console
            console.error(`API Fetch Failed: ${response.statusText}`);
            // Return an empty array or throw an error to halt rendering if critical
            return []; 
        }

        const result: ApiResponse = await response.json();

        if (result.status === 'success') {
            return result.data;
        } else {
            // Log the specific error message from the API handler
            console.error('API Error Status:', result.message);
            return [];
        }
        
    } catch (error) {
        // Log network or JSON parsing errors
        console.error('Network or Parsing Error:', error);
        return [];
    }
}

// 5. Update the main component to correctly handle the MongoDB '_id' and call the function
export default async function ProjectsData({size}:{size:number}){

    const projects = await getProjects();
    
    return (

        <section id="projects" className="py-16">
            <div className="text-center pb-10">
                <h2 className="text-3xl font-bold pb-3">My Projects <i className="bi bi-kanban text-primary text-3xl"></i></h2>
                <p className="">A selection of my recent work showcasing skills and technologies I’ve mastered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                {projects.slice(0, size).map((project, index) => 
                    <Project 
                        // CRITICAL: Use MongoDB's '_id' for the unique key
                        key={project._id} 
                        id={project._id} // Passing _id as a generic 'id' prop 
                        project_name={project.project_name} 
                        description={project.description} 
                        icon={project.icon}
                    />
                )}
            </div>
            <div className="flex justify-center mt-6">
                {(size < 5) && <Link href={"/projects"} className='btn btn-xl bg-base-100 hover:bg-base-300'>More projects <i className="ml-2 text-primary text-lg bi bi-rocket-takeoff"></i></Link>}
            </div>
        </section>

    );
}
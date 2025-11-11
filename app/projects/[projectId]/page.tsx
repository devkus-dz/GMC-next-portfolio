// app/projects/[projectId]/page.tsx

// import data from '../projects.json'; // REMOVE: No longer needed
import Cta from '@/components/sections/Cta';
import { notFound } from 'next/navigation';

// 1. Define the full structure of your project, including the stack fields
interface Project {
    _id: string; // MongoDB ID
    icon: string;
    project_name: string;
    description: string;
    role: string;
    stack?: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        authentication?: string;
        api?: string;
        state_management?: string;
    };
    features?: string[];
}

interface ApiResponse {
    status: 'success' | 'error';
    message: string;
    data: Project; // Expect a single Project object
}

// 2. Data Fetching Function
const getProjectById = async (projectId: string): Promise<Project | null> => {
    // Construct the absolute API path
    const apiRoute = `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${projectId}`;

    try {
        const response = await fetch(apiRoute, { cache: 'no-store' }); 

        if (response.status === 404) {
             // Let the caller handle the 404
             return null;
        }

        if (!response.ok) {
            console.error(`API Fetch Failed with status: ${response.status}`);
            return null;
        }

        const result: ApiResponse = await response.json();

        if (result.status === 'success') {
            // The API route returns the single project data
            return result.data;
        } else {
            console.error('API Error Status:', result.message);
            return null;
        }
    } catch (error) {
        console.error('Network Error:', error);
        return null;
    }
}

// 3. Update the main Server Component to call the new function
export default async function ProjectPage({params} : {params: {projectId: string}}){
    
    // We already have projectId directly from params, no need for await
    const { projectId } = await params;
    
    // Fetch the single project
    const project = await getProjectById(projectId);

    // If the fetch returns null (due to 404 or error), use Next.js's notFound()
    if (!project) {
        // This will render the closest not-found.tsx file
        notFound(); 
    }

    // Now 'project' is guaranteed to be a valid Project object
    return (
        <>
            <div className="py-24 flex flex-row gap-8 justify-center">
                <i className={`bi bi-${project.icon} text-primary text-6xl`}></i>
                <h1 className="text-5xl font-bolder">{project.project_name}</h1>
            </div>

            {/* ... Rest of your rendering logic remains the same, but remove ':any' types if possible */}
            <div className="py-6" id="project-details">
                <h2 className="text-3xl font-semibold py-6">Technical Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-26">
                    <div className='card bg-base-100 p-6'>

                        <h4 className="text-xl font-semibold mb-2 text-primary">Stack</h4>

                        {/* Note: TypeScript knows project has a 'stack' property now */}
                        {project.stack?.frontend && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>Frontend </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.frontend.map((s, i) => (
                                        <li key={i} className='badge badge-soft badge-primary mr-1'>{s}</li>
                                    ))}
                                </div>
                            </ul>
                        )}
                        
                        {/* Repeat for backend, database, etc. */}
                        {project.stack?.backend && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>backend </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.backend.map((s, i) => (
                                        <li key={i} className='badge badge-soft badge-primary mr-1'>{s}</li>
                                    ))}
                                </div>
                            </ul>
                        )}
                        
                        {project.stack?.database && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>Database </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.database.map((s, i) => (
                                        <li key={i} className='badge badge-soft badge-primary mr-1'>{s}</li>
                                    ))}
                                </div>
                            </ul>
                        )}

                        {project.stack?.authentication && (
                            <div className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 py-1 w-24'>Auth </span>
                                <p className='badge badge-soft badge-primary p-1 mt-1 ml-2'> {project.stack.authentication}</p>
                            </div>  
                        )} 

                        {project.stack?.api && (
                            <div className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 py-1 w-24'>API </span>
                                <p className='badge badge-soft badge-primary p-1 mt-1 ml-2'> {project.stack.api}</p>
                            </div>  
                        )} 

                        {project.stack?.state_management && (
                            <div className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 py-1 w-24'>State </span>
                                <p className='badge badge-soft badge-primary p-1 mt-1 ml-2'> {project.stack.state_management}</p>
                            </div>  
                        )} 
                        
                        <h4 className="text-xl font-semibold my-3 text-primary">Features </h4>

                        {project.features && (
                            <ul>
                            {project.features.map((s, i) => 
                                <li key={i} className=''>- {s}</li>
                            )}
                            </ul>
                        )}
                        
                    </div>

                    <div className="card bg-base-100 p-6">
                        <h4 className="text-xl font-semibold text-primary">Role</h4>
                        <p className="my-2">{project.role}</p>
                        
                        <h4 className="text-xl font-semibold py-3 text-primary">Project Description</h4>
                        <p className="">{project.description}</p>
                    </div>
                </div>
            </div>
            <Cta />
        </>    
    );
}
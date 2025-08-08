import { Key } from 'react';
import data from '../projects.json'; 
import Cta from '@/components/sections/Cta';

export default async function projectPage({params} : {params: Promise<{projectId: string}>}){
    
    const {projectId} = await params;
    const project:any = data.find(p => p.id === Number(projectId));

    if (!project) return <p>Data not found...</p>;

    return (
        <>
            <div className="py-24 flex flex-row gap-8 justify-center">
                <i className= {`bi bi-${project.icon} text-primary text-6xl`}></i>
                <h1 className="text-5xl font-bolder">{project.project_name}</h1>
            </div>

            <div className="py-6" id="project-details">
                <h2 className="text-3xl font-semibold py-6">Technical Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-26">
                    <div className='card bg-base-100 p-6'>

                        <h4 className="text-xl font-semibold mb-2 text-primary">Stack</h4>

                        {project.stack?.frontend && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>Frontend </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.frontend.map((s:any, i:number) => (
                                        <li key={i} className='badge badge-soft badge-primary mr-1'>{s}</li>
                                    ))}
                                </div>
                            </ul>
                        )}
                        
                        {project.stack?.backend && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>backend </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.backend.map((s:any, i:number) => (
                                        <li key={i} className='badge badge-soft badge-primary mr-1'>{s}</li>
                                    ))}
                                </div>
                            </ul>
                        )}
                        
                        {project.stack?.database && (
                            <ul className='card card-side bg-base-200 mb-2'>
                                <span className='card-title bg-base-300 rounded-l-lg px-2 w-24'>Database </span>
                                <div className="card-body flex flex-row flex-wrap p-2">
                                    {project.stack.database.map((s:any, i:number) => (
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
                                {project.features.map((s:any, i:any) => 
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
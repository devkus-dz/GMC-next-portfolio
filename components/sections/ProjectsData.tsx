import { promises as fs } from 'fs';
import Project from "../ui/Project";
import Link from 'next/link';

interface Project{
    icon: string;
    id: number,
    project_name: string,
    description: string,
}

const getProjects = async () : Promise<Project[]> => {
    const file = await fs.readFile(process.cwd() + '/app/projects/projects.json', 'utf8');
    const data = JSON.parse(file);
    return data;
}

export default async function ProjectsData({size}:{size:number}){

    const projects = await getProjects();
    
    return (

        <section id="projects" className="py-16">
            <div className="text-center pb-10">
                <h2 className="text-3xl font-bold pb-3">My Projects <i className="bi bi-kanban text-primary text-3xl"></i></h2>
                <p className="">A selection of my recent work showcasing skills and technologies I’ve mastered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                    {projects.slice(0, size).map((project, index) => <Project key={project.id} id={project.id} project_name={project.project_name} description={project.description} icon={project.icon}/>)}
            </div>
            <div className="flex justify-center mt-6">
                {(size < 5) && <Link href={"/projects"} className='btn btn-xl bg-base-100 hover:bg-base-300'>More projects <i className="ml-2 text-primary text-lg bi bi-rocket-takeoff"></i></Link>}
            </div>
        </section>

    );
}
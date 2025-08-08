import ProgressCard from "../ui/ProgressCard";

export default function Skills() {

    const special_skills:any[] = [
        {
          "id": 1,
          "title": "Full-Stack Web Development",
          "description": "Build and manage both front-end and back-end systems, ensuring seamless user experiences and robust server operations.",
          "value": 90
        },
        {
          "id": 2,
          "title": "MERN Stack",
          "description": "Develop dynamic web apps using MongoDB, Express.js, React, and Node.js—covering the full development lifecycle.",
          "value": 85
        },
        {
          "id": 3,
          "title": "API Design & Integration",
          "description": "Design RESTful and GraphQL APIs and connect external services efficiently to enhance app functionality.",
          "value": 80
        },
        {
          "id": 5,
          "title": "Responsive UI/UX Design",
          "description": "Craft intuitive interfaces that adapt to all devices using modern CSS frameworks and UX best practices.",
          "value": 75
        }
    ];
      

  return (
    <section id="skills" className="py-16">
        <div className="text-center pb-10">
            <h2 className="text-3xl font-bold pb-3">Technical Expertise <i className="bi bi-tools text-primary text-3xl"></i></h2>
            <p className="">Specialized in modern mobile development technologies and frameworks</p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-8">
            <div>
                <h3 className="font-bold text-xl py-6 text-primary">Core Technologies</h3>
                <ul className="w-full card bg-base-100 hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300 p-6">
                    <li className="mb-4">
                        <h4 className="text-lg font-bold">HTML / CSS</h4>
                        <progress className="progress progress-primary max-w-[90%]" value={100} max="100"></progress> <span className="text-sm"> 100%</span>
                    </li>
                    <li className="mb-4">
                        <h4 className="text-lg font-bold">Javascript</h4>
                        <progress className="progress progress-primary max-w-[90%]" value={90} max="100"></progress> <span className="text-sm"> 90%</span>
                    </li>
                    <li className="mb-4">
                        <h4 className="text-lg font-bold">PHP</h4>
                        <progress className="progress progress-primary max-w-[90%]" value={90} max="100"></progress> <span className="text-sm"> 90%</span>
                    </li>
                    <li className="mb-4">
                        <h4 className="text-lg font-bold">Python</h4>
                        <progress className="progress progress-primary max-w-[90%]" value={80} max="100"></progress> <span className="text-sm"> 80%</span>
                    </li>
                </ul>
            </div>
            
            <div className="col-span-2">
                <h3 className="font-bold text-xl py-6 text-primary">Specialized skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <ProgressCard data={special_skills}/>
                </div>
            </div>
        </div>
        
    </section>
  )
}

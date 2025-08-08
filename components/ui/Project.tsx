"use client"

import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css' 
import { useEffect } from "react";

export default function Project({
        id,
        project_name,
        description,
        icon
    }:{
        id:number,
        project_name:string, 
        description:string,
        icon:string
    }){

    useEffect(() => {
        AOS.init({
            duration: 1000,
            // once: true,
        });
        }, []);
          
    return (
        <Link  href={`/projects/${id}`}>
            <div data-aos="fade-up-left" className="card bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300">
                <div className="card-body flex flex-row">
                    <i className={`bi bi-${icon} text-primary text-3xl`}></i>
                    <div className="ml-2">
                        <h2 className="card-title pt-1 pb-2 text-primary">{project_name}</h2>
                        <p>{description.slice(0, 120)}{description.length > 120 ? '...' : ''}</p>
                    </div>
                </div>
            </div>
        </Link>


    );
}
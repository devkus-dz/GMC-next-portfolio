"use client"

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css' 

export default function Education() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          // once: true,
        });
      }, []);

    return (
        <section id="education" className='lg:flex lg:flex-col lg:items-center'>
        <h2 className="text-3xl font-bold py-16 ">Education <i className="bi bi-mortarboard text-primary text-3xl"></i></h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-6 lg:max-w-[80%]">
            <li data-aos="fade-left">
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-7 w-7"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end card bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300 p-3 mt-0">
                    <time className="font-mono italic text-xl text-primary font-semibold">2025</time>
                <div className="text-lg font-black">Master's Degree in Computer Science</div>
                    I completed my master's degree in computer science with a focus on AI and machine learning, where I researched and developed intelligent systems for data analysis and optimization.
                </div>
                <hr />
            </li>
            <li data-aos="fade-right">
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-7 w-7"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end mb-10 card bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300 p-3 mt-0">
                <time className="font-mono italic text-xl text-primary font-semibold">2022</time>
                    <div className="text-lg font-black">Bachelor's Degree in Information Technology</div>
                    During my bachelor’s, I focused on software engineering, web development, and database management. I built several web applications using JavaScript, HTML, CSS, and PHP.
                </div>
                <hr />
            </li>
            <li data-aos="fade-left">
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-7 w-7"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end card bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300 p-3 mt-0">
                    <time className="font-mono italic text-xl text-primary font-semibold">2020</time>
                    <div className="text-lg font-black">Full Stack Web Development Bootcamp</div>
                    I attended an intensive bootcamp that taught me full-stack web development with the **MERN stack**. I learned how to build end-to-end applications, from the front-end with React to the back-end with Node.js and MongoDB.
                </div>
                <hr />
            </li>
            <li data-aos="fade-right">
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-7 w-7"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10 card bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300 p-3 mt-0">
                    <time className="font-mono italic text-xl text-primary font-semibold">2018</time>
                    <div className="text-lg font-black">High School Diploma</div>
                    Graduated from high school with a strong interest in computer science. I took advanced courses in programming and computer systems, which sparked my passion for web development.
                </div>
                <hr />
            </li>
        </ul>
        </section>

    )
}

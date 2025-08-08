import Image from "next/image";
import Link from "next/link";

// import Dither from "./animation/Dither";

export default function Hero({btnText='Hire Me', btnLink='#'}:{btnText:string, btnLink:string}){

    return(
        <section id="bio" className="flex flex-col lg:flex-row items-center justify-center py-16">
            <div className="flex flex-col items-center lg:flex-[1]">
                <Image src={"/profile.jpg"} alt={"profile image"} width={"250"} height={"250"} className="rounded rounded-full m-2"/>
                <h3 className="text-xl font-semibold">Devkus DZ</h3>
                <h4 className="text-lg font-semibold text-primary">WEB DEVELOPER</h4>
            </div>
            <div className="lg:flex-[2] ">
                <p className="lg:pr-[20%] py-4">
                    Hi! I’m <span className="text-primary font-semibold">Devkus DZ</span>, a passionate Software Developer specializing in the MERN stack <span className="badge badge-soft badge-primary">MongoDB</span>,<span className="badge badge-soft badge-primary"> Express.js</span> ,<span className="badge badge-soft badge-primary"> React</span> ,<span className="badge badge-soft badge-primary"> Node.js</span>. <br />
                    I focus on building scalable, user-friendly web applications, combining clean code with modern technologies. <br />
                    Always eager to learn and improve, I aim to create responsive, efficient solutions that bring ideas to life. Let's connect!
                </p>
                <Link className="btn btn-lg bg-base-100 hover:bg-base-300" href={btnLink}>{btnText}</Link>
            </div>    
        </section>
    );
}
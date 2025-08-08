import Link from "next/link";

export default function Navbar(){
    return (
        <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row justify-between px-4 !rounded-b-xl ">
            <div>
                <a className="btn btn-ghost text-xl">Next <span className="text-primary"> Portfolio</span></a>
            </div>
            <div>
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About Me</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <div>
                <Link href={'#cta'} className="btn btn-base">Resume</Link>
            </div>
        </div>
    );
}
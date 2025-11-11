import Link from "next/link";
import Social from "../ui/icons/Social";

export default function Cta() {
  return (
    <section id="cta" className="flex flex-col text-center bg-base-100 py-16 justify-center rounded-t-xl">
        <h2 className="font-bold text-3xl md:px-6">Let’s Build Your <span className="text-primary">Next Digital Product</span>  </h2>
        <p className="lead py-6 px-6 xl:px-96 text-center">
        I’m a web and mobile developer passionate about creating fast, responsive, and user-friendly applications. Whether you need a sleek website, a powerful mobile app, or a full-stack solution — I’m here to help bring your vision to life.
        </p>
        <div className="flex flex-row gap-4 justify-center py-3">
            <Link className="btn btn-outline" href={"/contact"}>Get in touch</Link>
            <button className="btn btn-base">Download Resume</button>
        </div>
        <div className="flex flex-row gap-4 py-6 justify-center">
          <Social size={"3xl"}/>
        </div>
    </section>
  )
}
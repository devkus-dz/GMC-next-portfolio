

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/ProjectsData";
import Education from "@/components/sections/Education";
import Cta from "@/components/sections/Cta";
import Skills from "@/components/sections/Skills";


export default function Home() {

  return (
    <>
      <Hero btnText={"About me"} btnLink={"/about"} />
      <Projects size={4}/>
      <Skills />
      <Education />
      <Cta />
    </>
  );
}

import Cta from "@/components/sections/Cta";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";



export default function about() {
  return (
    <>
      <Hero btnText={"Hire me"} btnLink={"#cta"} />
      <Education />
      <Skills />
      <Cta />
      
    </>
  )
}

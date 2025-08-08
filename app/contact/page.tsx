import ContactForm from "@/components/ui/ContactForm";
import Cta from "@/components/sections/Cta";


export default function contact(){
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
                
                <div className="py-8 px-4 lg:px-32">
                    <h2 className="text-4xl mb-6 font-bold">Get in Touch <i className="bi bi-send text-4xl text-primary"></i></h2>
                    <p className="text-lg">
                        Feel free to reach out if you have a question, want to collaborate, or just want to say hello. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <ContactForm />
            </section>
            
            <Cta />
        </>
    );
}
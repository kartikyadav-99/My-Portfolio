import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section id="contact">
        <div className="mx-auto max-w-6xl">
            <p className="my-10 text-center text-3xl lg:text-8xl">Intersted In Working Together?
            </p>
            <p className="p-4 text-center text-xl">{CONTACT.text}</p>


            <div className="mt-10">
              <ContactForm/>
            </div>
            <div className="mt-20">
            <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl ">{CONTACT.email}</p>
            <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-4xl ">{CONTACT.phone}</p>
            </div>

        <div className="mt-20 flex items-center justify-center gap-8">
           {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
            </a>
           ))} 
        </div>

        <p className="my-8 text-center text-gray-400">&copy; compileTab. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Contact
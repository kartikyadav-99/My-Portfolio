import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/amazon.png";
import project2 from "../assets/books.png";
import project3 from "../assets/tinder.png";
import project4 from "../assets/wheather.png";
import project5 from "../assets/whatapp.png";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, ";

export const PROJECTS = [

  {
    id: 1,
    title: "Amazon Clone",
    description:
      "Created a Amazon-Clone app using ReactJS, React Router, Material UI, and Firebase. Added real-time messaging with Firebase Firestore and login system using Firebase Authentication",
    imgSrc: project1,
    link: "https://amazon-clone-nu-lime.vercel.app/",
  },
  {
    id: 2,
    title: "Book Search App",
    description:
      "A simple React app that lets users search for books by title, author, or keyword using an external API. Built with Axios for fetching data, it displays book details such as title, author, description, and responsive UI",
    imgSrc: project2,
    link: "https://my-search-book-app.vercel.app/",
  },
  {
    id: 3,
    title: "Tinder Clone",
    description:
      "Created a Tinder clone app using ReactJS, React Router, Material UI, and Firebase. Added real-time messaging with Firebase Firestore and login system using Firebase Authentication",
    imgSrc: project3,
    link: "https://tinder-clone-9aba6.web.app/",
  },
  {
    id: 4,
    title: "Wheather App",
    description:
      "This is a simple React weather app that shows live weather updates. I used Axios to fetch data from an API and display details like temperature, weather condition, and location in a neat interface.",
    imgSrc: project4,
    link: "https://weatheryoulikeit.netlify.app/",
  },
  {
    id: 5,
    title: "WhatsApp like Chat App",
    description:
      "Created a WhatsApp-like chat app using ReactJS, React Router, Material UI, and Firebase. Added real-time messaging with Firebase Firestore and login system using Firebase Authentication.",
    imgSrc: project5,
    link: "https://feel-like-whats-app-app.vercel.app/",
  },

];

export const ABOUT =
  "I am a passionate frontend React developer, eager to create modern and responsive web applications. I love turning ideas into user-friendly interfaces and learning new technologies. I am detail-oriented, motivated, and always looking to grow as a developer while contributing to meaningful projects";

export const EDUCATIONS = [
  {
    company: "B.Tech in Computer Science & Engineering",
    role: "Chameli Devi Group of Institutions, Indore, India",
    year: "8/2021 - 6/2025",
    description:
      "I have Completed my B.Tech in CSE, where I built strong foundations in programming, web development, and modern frontend technologies",
  },
]

export const EXPERIENCES = [
  {
    company: "Fresher",
    role: "Frontend React Developer",
    year: "Present",
    description:
      "I am a passionate frontend developer with hands-on experience in building responsive and modern web applications using ReactJS, HTML, CSS, and JavaScript. I love turning ideas into user-friendly interfaces and learning new technologies to make my projects better. As a fresher, I am eager to contribute my skills, improve continuously, and grow in real-world web development projects.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ikaartikyadav/?hl=en",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/kartikyadav-99",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/kartik-yadav-5648ba230/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "kartiky211099@gmail.com",
  phone: "+(91 - 9109083047)",
};

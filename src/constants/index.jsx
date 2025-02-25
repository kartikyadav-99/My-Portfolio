import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.avif";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.avif";

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
    title: "Weather App",
    description:
      "A React Weather App is a web application that fetches real-time weather data using APIs like OpenWeatherMap or WeatherAPI.",
    imgSrc: project1,
    link: "https://weatheryoulikeit.netlify.app/",
  },
  {
    id: 2,
    title: "Book Search App",
    description:
      "A React Search Book App allows users to search for books by title, author, or keywords.",
    imgSrc: project2,
    link: "https://showmethebook.vercel.app/",
  },
  {
    id: 3,
    title: "Movie Search App",
    description:
      "A React Movie Search App is a web application that allows users to search for movies by title and posters.",
    imgSrc: project3,
    link: "https://search-moviefy.netlify.app/",
  },
  {
    id: 4,
    title: "Meme Generator App",
    description:
      "A React Meme Generator App is a simple web application that allows users to create custom memes ",
    imgSrc: project4,
    link: "https://memengine.netlify.app/",
  },

];

export const ABOUT =
  "As a dedicated Frontend React Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in front-end and technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Fresher",
    role: "Frontend Developer",
    year: "1/2025 - 6/2025",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
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
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "kartiky211099@gmail.com",
  phone: "+(91 - 9109083047)",
};

//import React from 'react'

import { LuImport } from "react-icons/lu";
import Kartik from "../assets/hero.avif";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center hero__container text-white mt-10 ">
          <h1 className="text-[5vw] font-semibold leading-tight">
            Hello, I’m 
            <span className="inline-flex bg-[#f5e0cf] rounded-full px-4 py-1">
              <img
                src="https://plus.unsplash.com/premium_vector-1689096949812-b8b133368067?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-full w-14 h-8 object-cover mr-3"
              />
            </span>{" "}
            Kartik <br />I Design 
            <span className="inline-flex items-center bg-[#fffad6] rounded-full px-6 py-1">
              <img
                src="https://plus.unsplash.com/premium_vector-1710425435014-2a64900fcee0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt=""
                className="rounded-full object-cover w-14 h-9"
              />
            </span>{" "}
            Software.
          </h1>
        </div>
          {/* Paragraph */}
          <p className="hero__para text-center max-w-5xl mt-12 leading-relaxed text-2xl">
        Im Passionate React developer with strong frontend skills. I create modern, responsive, and user-friendly web interfaces. Eager to learn, innovate, and deliver clean, efficient, and scalable solutions.💻
          </p>

        <div className="mt-8">
          <a
            href="/Kartik_Yadav_Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex w-fit items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>Resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>

        <div className="w-full">
          <img
            src={Kartik}
            alt="Kartik Yadav"
            className="mt-4 h-92 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


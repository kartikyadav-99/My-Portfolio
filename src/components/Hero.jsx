//import React from 'react'

import { LuImport } from "react-icons/lu"
import Kartik from "../assets/Hero.avif";

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 mr-15 overflow-hidden text-[8vw] font-semibold uppercase  leading-none">
                Kartik
            </h1>
            <h1 className="overflow-hidden ml-20 text-[12vw] text-amber-50 font-semibold uppercase leading-none">
                 Yadav
            </h1>

            <div className="mt-8">
                <a href="/Kartik_Yadav_Resume.docx"
                target="_blank" rel="noopener noreferrer" download
                className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
                    <span>Resume.pdf</span>
                    <LuImport className="ml-2" />  
                </a>    
            </div>

            <div className="w-full">
                <img src={Kartik} alt="Kartik Yadav" className="mt-4 h-92 w-full object-cover"/>
            </div>

        </div>
    </section>
  )
}

export default Hero
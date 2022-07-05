import React, { useState } from "react";
import Image from 'next/image'
import logo from 'assets/images/LOGO.svg'

export default function Menu({page}) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`md:px-8 px-4 py-4 title top-0 w-full flex flex-row justify-between items-center fixed z-50 ${isActive ? "bg-white" : "bg-black"}`}>
            <a href="/" className={`text-2xl  float-left hamburger ${isActive ? "text-black" : "text-white"}`}>
              <Image 
                src={logo}
                alt="logo"
                width={"50px"}
                height={"50px"}
              />
            </a>
            <div className="float-right text-right" onClick={handleToggle}>
                <div className="flex justify-end">
                    <div className={`hamburger ${isActive ? "" : "is-active"}`}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
      </div>

      <div className={`title menu-container z-40 w-screen h-screen bg-black flex flex-col items-start justify-evenly py-20 px-8 md:px-24 fixed ${isActive ? "hidden" : ""}`}>
        <div>
          <a href="/" className={`text-white text-8xl hover:text-accent-1 hover:opacity-100 font-accent ${page === 'home' ? "opacity-100" : "opacity-50"}`}>home.</a>
        </div>
        <div>
          <a href="/work" className={`text-white text-8xl hover:text-accent-1 hover:opacity-100 font-accent ${page === 'work' ? "opacity-100" : "opacity-50"}`}>work.</a>
        </div>
        <div>
          <a href="/about" className={`text-white text-8xl hover:text-accent-1 hover:opacity-100 font-accent ${page === 'about' ? "opacity-100" : "opacity-50"}`}>about.</a>
        </div>
      </div>
    </>
  )
}
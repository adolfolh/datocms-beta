
import React from "react";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
      <div className="title relative py-16 bg-accent-1 z-30 flex flex-col justify-center">
        <div className="h-full flex items-center justify-center flex-col">
            <h2 className="md:px-32 pb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight font-accent">
            have an idea?
            </h2>
            <div className="flex flex-row">
                <a href="mailto:me@adolfolh.com" className="m-2 flex items-center w-10 text-black mix-blend-overlay hover:mix-blend-normal">
                    <FontAwesomeIcon fixedWidth icon={faEnvelope} size="4x" className="w-full p-2"/>
                </a>
                <a href="https://linkedin.com/in/adolfolh" className="m-2 flex items-center w-10 text-black mix-blend-overlay hover:mix-blend-normal">
                    <FontAwesomeIcon fixedWidth icon={faLinkedinIn} size="4x" className="w-full p-2"/>
                </a>
                <a href="https://twitter.com/adolfoolh" className="m-2 flex items-center w-10 text-black mix-blend-overlay hover:mix-blend-normal">
                    <FontAwesomeIcon fixedWidth icon={faTwitter} size="4x" className="w-full p-2"/>
                </a>
            </div>
        </div>
      </div>
    );
  }
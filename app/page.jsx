"use client";
import React from "react";
import Header from "./components/Header/Header";
import ContactButton from "./components/Contact/ContactButton";
import Journey from "./components/Journey/Journey";
import Experience from "./components/Experience/Experience";
import Stack from "./components/Stack/Stack";
import Github from "./components/Contact/Github";
import Gitlab from "./components/Contact/Gitlab";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function page() {
  return (
    <ParallaxProvider>
      <Parallax speed={-100}>
        <div className="flex flex-col items-center justify-center w-full space-y-96 mt-[1000px]">
          <div className="flex items-center justify-between w-full p-4 ]">
            <ContactButton />
            <div className="flex space-x-6">
              <Github />
              <Gitlab />
            </div>
          </div>
          <Header />
          <Journey />
          <Experience />
          <Parallax>
            <Stack />
          </Parallax>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}

export default page;

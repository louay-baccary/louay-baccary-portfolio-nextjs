"use client";
import React from "react";
import Header from "./components/Header/Header";
import ContactButton from "./components/Contact/ContactButton";
import Journey from "./components/Journey/Journey";
import Experience from "./components/Experience/Experience";
import Stack from "./components/Stack/Stack";

function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-96">
      <div className="flex items-end w-full">
        <ContactButton />
      </div>
      <Header />
      <Journey />
      <Experience />
      <Stack />
    </div>
  );
}

export default page;

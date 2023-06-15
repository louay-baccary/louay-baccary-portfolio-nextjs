"use client";
import React from "react";
import Header from "./components/Header/Header";
import ContactButton from "./components/Contact/ContactButton";

function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex items-end w-full">
        <ContactButton />
      </div>
      <Header />
    </div>
  );
}

export default page;

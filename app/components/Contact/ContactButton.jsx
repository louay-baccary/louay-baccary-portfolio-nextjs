import React from "react";

function ContactButton() {
  return (
    <div className="relative">
        <div className="absolute inset-0 bg-white rounded-full blur animate-pulse"></div>
      <button className="relative w-24 h-24 m-4 bg-transparent rounded-full hover:scale-110">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 animate-spin" />
        <span className="absolute font-extrabold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {" "}
          CONTACT ME
        </span>
      </button>
    </div>
  );
}

export default ContactButton;

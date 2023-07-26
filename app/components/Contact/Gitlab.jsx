import React from "react";

function Gitlab() {
  const onContactMeClick = () => {
    window.open("https://gitlab.com/louayBaccary", "_blank");
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 w-32 h-12 font-extrabold text-white bg-gradient-to-r from-purple-400 to-pink-600 rounded-s blur animate-pulse"></div>
      <button
        className="relative w-32 h-12 bg-transparent rounded-s hover:scale-110 "
        onClick={onContactMeClick}
      >
        <div className="w-32 h-12 bg-transparent rounded-full " />
        <span className="absolute font-extrabold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          Gitlab
        </span>
      </button>
    </div>
  );
}

export default Gitlab;

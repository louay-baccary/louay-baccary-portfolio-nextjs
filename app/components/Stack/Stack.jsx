import React from "react";
import TechLogo from "./TechLogo/TechLogo";

function Stack() {
  const stackList = [
    "docker.png",
    "ethereum.png",
    "hardhat.png",
    "ipfs.png",
    "jest.png",
    "pm2.png",
    "sonar.svg",
    "tailwind.png.png",
    "truffle.png",
    "vscode.png",
    "node.png",
    "react.png"
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        My Galaxy
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full">
        {stackList.map((stack) => (
          <TechLogo key={stack} imagesrc={stack} />
        ))}
      </div>
    </div>
  );
}

export default Stack;

import Image from "next/image";
import React from "react";
import "atropos/css";
import Atropos from "atropos/react";
function Header() {
  return (
    <div className="flex flex-col items-center justify-center w-1/4 h-full space-y-2 font-extrabold text-center">
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
        rotateTouch
        shadow={false}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl text-[#FBF9FF]">Hi , MY NAME IS</h2>
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            BACCARY LOUAY
          </h2>
          <Image src="/assets/photo.png" width={150} height={150} />
          <h2 className="text-[#B5E0DB] text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            I am a full-stack web3 developer
          </h2>
          <h3 className="pt-8 text-xl text-white">
            I am a highly skilled full stack developer with a strong backgroun
            in building web applications. I specialize in the MERN stack and
            have professional experience working on web 3 projects, using
            technologies such as Redux and TailwindCSS. With a passion for clean
            and efficient code, I am committed to delivering high-quality code.
          </h3>
        </div>
      </Atropos>
    </div>
  );
}

export default Header;

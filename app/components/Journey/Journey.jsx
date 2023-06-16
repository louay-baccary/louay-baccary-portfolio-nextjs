import React from "react";
import ItemWithTickIcon from "../ItemWithTickIcon/ItemWithTickIcon";

function Journey() {
  return (
    <div className="flex flex-col justify-center w-full p-4 space-x-4 space-y-4 text-white sm:w-1/2 item-center">
      <h2 className="p-2 text-3xl font-extrabold">
        Throughout my journey ,I have contributed to creating :
      </h2>
      <div className="flex flex-col items-center justify-between sm:flex sm:flex-row">
        <ul className="flex flex-col items-start mt-8 ">
          <li>
            <ItemWithTickIcon text="Full stack web apps" />
          </li>
          <li>
            <ItemWithTickIcon text="Progressive web apps" />
          </li>
        </ul>
        <ul className="flex flex-col items-start mt-8 ">
          <li>
            <ItemWithTickIcon text="Decentralized apps" />
          </li>
          <li>
            <ItemWithTickIcon text="Google chrome extensions" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Journey;

import React from "react";
import ItemWithTickIcon from "../ItemWithTickIcon/ItemWithTickIcon";

function Journey() {
  return (
    <div className="flex flex-col justify-center w-1/2 p-4 space-x-4 space-y-4 text-white item-center">
      <h2 className="text-3xl font-extrabold">
        Throughout my journey ,I have contributed to creating :
      </h2>
      <div className="flex items-center justify-between">
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

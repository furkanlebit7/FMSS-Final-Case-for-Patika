import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const menuClass =
    "absolute h-screen bg-white top-0 w-80 flex flex-col p-10 py-8 ease-in-out duration-300 transition-all shadow-lg dark:bg-darkMain z-20";
  return (
    <div>
      <button onClick={() => setToggle(true)} className="text-3xl ">
        <RxHamburgerMenu />
      </button>
      <div className={toggle ? menuClass + " left-0" : menuClass + " -left-80"}>
        <button
          onClick={() => setToggle(false)}
          className="self-end dark:text-white"
        >
          <TfiClose className="" />
        </button>
        <ul className="items-center flex flex-col gap-20 flex-1 justify-center text-black dark:text-white  ">
          <Link
            to="/starships"
            onClick={() => setToggle(false)}
            className="font-mono font-bold text-lg"
          >
            STARSHIPS
          </Link>
          <Link className="font-mono font-bold text-lg">STARSHIPS</Link>
          <Link className="font-mono font-bold text-lg">STARSHIPS</Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

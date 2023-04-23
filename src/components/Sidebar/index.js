import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  //on menuClass if you wanna short sidebar(not fullscreen) make w-screen to w-80 or something like that
  const menuClass =
    "absolute h-screen bg-white top-0 w-screen  flex flex-col p-10 py-8 ease-in-out duration-300 transition-all shadow-lg dark:bg-darkMain z-20";
  return (
    <div>
      <button onClick={() => setToggle(true)} className="md:text-3xl text-xl ">
        <RxHamburgerMenu />
      </button>
      <div
        className={toggle ? menuClass + " left-0" : menuClass + " -left-full"}
      >
        <button
          onClick={() => setToggle(false)}
          className="self-end dark:text-white"
        >
          <TfiClose className="" />
        </button>
        <ul className="items-center flex flex-col gap-20 flex-1 justify-center text-black dark:text-white  ">
          <li>
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="font-mono font-bold text-lg"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setToggle(false)}
              className="font-mono font-bold text-lg"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/starships"
              onClick={() => setToggle(false)}
              className="font-mono font-bold text-lg"
            >
              STARSHIPS
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setToggle(false)}
              className="font-mono font-bold text-lg"
            >
              Q&A
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

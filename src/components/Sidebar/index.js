// PACKAGES
import React, { useState } from "react";

//ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import SidebarLink from "../ui/SidebarLink";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  //on menuClass if you wanna short sidebar(not fullscreen) make w-screen to w-80 or something like that
  const menuClass =
    "absolute h-screen bg-white top-0 w-screen md:w-1/2 lg:w-1/3  flex flex-col p-10 py-8 ease-in-out duration-300 transition-all shadow-lg dark:bg-darkMain z-20";
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
          <SidebarLink to={"/"} name={"HOME"} setToggle={setToggle} />
          <SidebarLink
            to={"/starships"}
            name={"STARSHIPS"}
            setToggle={setToggle}
          />
          <SidebarLink to={"/qa"} name={"Q & A"} setToggle={setToggle} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const menuClass =
    "absolute h-screen bg-white top-0 w-80 flex flex-col p-10 py-8 ease-in-out duration-300 transition-all shadow-lg dark:bg-darkMain";
  return (
    <div>
      <button onClick={() => setToggle(true)} className="text-3xl ">
        <RxHamburgerMenu />
      </button>
      <div className={toggle ? menuClass + " left-0" : menuClass + " -left-80"}>
        <button onClick={() => setToggle(false)} className="self-end">
          <GrClose />
        </button>
        <ul className="items-center flex flex-col gap-20 flex-1 justify-center text-black dark:text-white  ">
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

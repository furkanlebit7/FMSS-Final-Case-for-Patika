import React, { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const menuClass =
    "absolute h-screen bg-white top-0 w-80 flex flex-col p-10 py-8 ease-in-out duration-300 transition-all";
  return (
    <div>
      <button onClick={() => setToggle(true)}>button</button>
      <div className={toggle ? menuClass + " left-0" : menuClass + " -left-80"}>
        <button onClick={() => setToggle(false)} className="self-end">
          X
        </button>
        <ul className="items-center flex flex-col gap-20 flex-1 justify-center">
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

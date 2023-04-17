import React from "react";
import Sidebar from "../Sidebar";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-20 ">
      <Sidebar />
      <hr className="text-xl flex-1 text-black border-2 border-gray-300 rounded" />
      <p className="font-star">
        STAR
        <br />
        WARS
      </p>
      <hr className="text-xl flex-1 text-black border-2 border-gray-300 rounded" />

      <button>
        <img src={require("../../assets/images/darkButton.png")} width={30} />
      </button>
    </div>
  );
};

export default Header;

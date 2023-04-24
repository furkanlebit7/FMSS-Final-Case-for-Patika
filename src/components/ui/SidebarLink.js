//PACKAGES
import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ to, name, setToggle }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={() => setToggle(false)}
        className="font-mono font-bold text-lg"
      >
        {name}
      </Link>
    </li>
  );
};

export default SidebarLink;

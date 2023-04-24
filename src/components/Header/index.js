//PACKAGES
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//COMPONENTS
import Sidebar from "../Sidebar";

//SLICES
import { setTheme } from "../../redux/slices/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  //sets theme based on if redux has theme
  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    dispatch(setTheme());
  };
  return (
    <div className="flex items-center justify-between sm:gap-10 xl:gap-20  gap-3 ">
      <Sidebar />
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1 " />
      <Link to="/" className="font-star leading-4 text-xs md:text-base">
        <span className="ml-2 ">STAR</span>
        <br />
        <span className="mr-2">WARS</span>
      </Link>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />

      <button onClick={() => handleTheme()}>
        <img
          className="w-6 md:w-8"
          alt="theme"
          src={
            theme === ""
              ? require("../../assets/images/darkButton.png")
              : require("../../assets/images/lightButton.png")
          }
        />
      </button>
    </div>
  );
};

export default Header;

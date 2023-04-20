import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
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
      <Link to="/" className="font-star leading-4">
        <span className="ml-2">STAR</span>
        <br />
        <span className="mr-2">WARS</span>
      </Link>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />

      <button onClick={() => handleTheme()}>
        <img
          className="w-8"
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

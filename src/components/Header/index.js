import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";

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
    <div className="flex items-center justify-between gap-20 dark:text-white">
      <Sidebar />
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1 " />
      <p className="font-star leading-4">
        <span className="ml-2">STAR</span>
        <br />
        <span className="mr-2">WARS</span>
      </p>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />

      <button onClick={() => handleTheme()}>
        <img
          className="w-8"
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

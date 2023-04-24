//PACKAGES
import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="w-full h-full flex items-center justify-center z-10 mt-20">
      <div className="flex items-center justify-center flex-col">
        <img
          className="w-2/3 lg:w-full"
          loading="lazy"
          alt="loading"
          src={
            theme === "dark"
              ? require("../../assets/images/loadingLight.png")
              : require("../../assets/images/loadingDark.png")
          }
        />
        <p className="animate-pulse font-star text-sm lg:text-xl">
          Loading ...
        </p>
      </div>
    </div>
  );
};

export default Loading;

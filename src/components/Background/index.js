import React from "react";

const Background = ({ to }) => {
  return (
    <div className="absolute -z-10 top-0 right-0 bg-bgDark dark:bg-bgLight bg-cover bg-center  ">
      <h1 className="bg-white  text-7xl sm:text-8xl md:text-10xl font-bold font-star mix-blend-screen h-screen w-screen flex items-center justify-center opacity-80 text-center leading-none dark:bg-black dark:text-white dark:mix-blend-darken dark:opacity-90">
        <div>
          STAR
          <br />
          WARS
        </div>
      </h1>
    </div>
  );
};

export default Background;

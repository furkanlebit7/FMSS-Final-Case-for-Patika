import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center  justify-between gap-3 xl:gap-20 w-full">
      <ul className="flex items-center  gap-2 md:gap-4 text-xs font-semibold ">
        <li>
          <a
            href="https://github.com/furkanlebit7"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/furkanlebit7/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/furkanlebit7/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
      </ul>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />
      <p className="font-star text-xs">FMSS</p>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1 hidden sm:inline-block " />

      <p className="text-xs font-semibold hidden sm:inline-block sm:px-5">
        created by furkanlebit7
      </p>
    </div>
  );
};

export default Footer;

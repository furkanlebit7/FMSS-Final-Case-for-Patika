import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-20 dark:text-white">
      <ul className="flex items-center gap-4 text-xs font-semibold">
        <li>github</li>
        <li>linkedin</li>
        <li>instagram</li>
      </ul>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />
      <p className="font-star">FMSS</p>
      <span className="light-saber shadow-box-blue dark:shadow-box-red flex-1" />

      <p className="text-xs font-semibold px-5">created by furkanlebit7</p>
    </div>
  );
};

export default Footer;

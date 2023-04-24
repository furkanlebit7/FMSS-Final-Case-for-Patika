import React from "react";

// COMPONENTS
import SocilaLink from "../ui/SocilaLink";

const Footer = () => {
  return (
    <div className="flex items-center  justify-between gap-3 xl:gap-20 w-full">
      <ul className="flex items-center  gap-2 md:gap-4 text-xs font-semibold ">
        <SocilaLink href={"https://github.com/furkanlebit7"} name={"github"} />
        <SocilaLink
          href={"https://www.linkedin.com/in/furkanlebit7/"}
          name={"linkedin"}
        />
        <SocilaLink
          href={"https://www.instagram.com/furkanlebit7/"}
          name={"instagram"}
        />
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

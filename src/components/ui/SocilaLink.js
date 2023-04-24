import React from "react";

const SocilaLink = ({ href, name }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        {name}
      </a>
    </li>
  );
};

export default SocilaLink;

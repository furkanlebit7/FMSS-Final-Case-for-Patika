import React from "react";

const InformationBox = ({ name, tag }) => {
  return (
    <div>
      <span className="font-semibold">{name}</span>
      <p className="bg-white dark:bg-darkMain p-2 rounded">{tag}</p>
    </div>
  );
};

export default InformationBox;

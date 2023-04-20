import React from "react";

const SearchInput = ({ text, setText }) => {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Straship"
        type="text"
        id="small-input"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-darkMain dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  focus:outline-0"
      />
    </div>
  );
};

export default SearchInput;

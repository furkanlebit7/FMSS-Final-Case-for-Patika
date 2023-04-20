import React from "react";

const LoadMoreButton = ({ hasNextPage, isFetchingNextPage, fetchNextPage }) => {
  return (
    <div className="text-center">
      <button
        className="text-black bg-white hover:bg-gray-300 focus:ring-4 outline-none focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkMain dark:hover:bg-black dark:text-white"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default LoadMoreButton;

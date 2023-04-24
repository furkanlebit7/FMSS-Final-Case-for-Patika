import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../components/Loading";
import { fetchStarships } from "../services/StarWarsService";
import StarshipCard from "../components/StarshipCard";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchInput from "../components/SearchInput";
const StarShips = () => {
  const [text, setText] = useState("");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["starships"],
      queryFn: fetchStarships,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next === null) {
          return;
        }
        return pages.length + 1;
      },
    });

  console.log(data);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    <p>Error</p>;
  }
  return (
    <div>
      <SearchInput setText={setText} text={text} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-10 overflow-hidden h-full py-8 ">
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((starship, i) => {
              if (starship.name.toLowerCase().includes(text.toLowerCase())) {
                return <StarshipCard starship={starship} key={i} />;
              }
            })}
          </React.Fragment>
        ))}
      </div>
      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default StarShips;

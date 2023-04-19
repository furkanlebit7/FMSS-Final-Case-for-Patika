import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../components/Loading";
import { fetchStarships } from "../services/StarWarsService";
import imageLinks from "../assets/imageLinks";
const StarShips = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["starships"],
    queryFn: () => fetchStarships(),
  });

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    <p>Error</p>;
  }
  return (
    <div>
      <div>
        <input
          placeholder="Search Straship"
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-darkMain dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10 focus:outline-0"
        />
        <div className="grid grid-cols-5 gap-5 gap-y-10">
          {data.results.slice(0, 1).map((starship, i) => (
            <div className="border p-3 rounded" key={i}>
              <img
                loading="lazy"
                alt="starship"
                src={require(`../assets/images/starships/${starship.name}.png`)}
              />
              <p>{starship.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarShips;

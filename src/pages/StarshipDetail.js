import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchStarship } from "../services/StarWarsService";
import Loading from "../components/Loading";

const StarshipDetail = () => {
  //gets id from url
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["starship:id", id],
    queryFn: () => fetchStarship(id),
  });

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div className="mb-3">
        <img
          src={require(`../assets/images/starships/${data.name}.png`)}
          alt="starship"
          className="mx-auto h-64 drop-shadow-2xl"
        />
      </div>
      <p className="text-xl font-bold text-blue-600 dark:text-red-600 my-4 ">
        {data.name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="font-semibold">Model :</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">{data.model}</p>
        </div>
        <div>
          <span className="font-semibold">Passengers</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.passengers}
          </p>
        </div>
        <div>
          <span className="font-semibold">Max Atmosphering Speed</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.max_atmosphering_speed}
          </p>
        </div>
        <div>
          <span className="font-semibold">Manufacturer</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.manufacturer}
          </p>
        </div>
        <div>
          <span className="font-semibold">Crew</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">{data.crew}</p>
        </div>
        <div>
          <span className="font-semibold">Cargo Capacity</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.cargo_capacity}
          </p>
        </div>
        <div>
          <span className="font-semibold">Consumables</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.consumables}
          </p>
        </div>
        <div>
          <span className="font-semibold">Hyperdrive Rating</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.hyperdrive_rating}
          </p>
        </div>
        <div>
          <span className="font-semibold">MGLT</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">{data.MGLT}</p>
        </div>
        <div>
          <span className="font-semibold">Starship Class</span>
          <p className="bg-white dark:bg-darkMain p-2 rounded">
            {data.starship_class}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail;

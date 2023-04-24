// PACKAGES
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

//COMPONENTS
import Loading from "../components/Loading";
import InformationBox from "../components/ui/InformationBox";

//SERVICES
import { fetchStarship } from "../services/StarWarsService";

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
        <InformationBox name={"Model"} tag={data.model} />
        <InformationBox name={"Passengers"} tag={data.passengers} />
        <InformationBox
          name={"Max Atmosphering Speed"}
          tag={data.max_atmosphering_speed}
        />
        <InformationBox name={"Manufacturer"} tag={data.manufacturer} />
        <InformationBox name={"Crew"} tag={data.crew} />
        <InformationBox name={"Cargo Capacity"} tag={data.cargo_capacity} />
        <InformationBox name={"Consumables"} tag={data.consumables} />
        <InformationBox
          name={"Hyperdrive Rating"}
          tag={data.hyperdrive_rating}
        />
        <InformationBox name={"MGLT"} tag={data.MGLT} />
        <InformationBox name={"Starship Class"} tag={data.starship_class} />
      </div>
    </div>
  );
};

export default StarshipDetail;

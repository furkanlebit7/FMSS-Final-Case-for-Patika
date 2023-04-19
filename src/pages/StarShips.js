import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../components/Loading";
import axios from "axios";
import { fetchStarships } from "../services/StarWarsService";
const StarShips = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["starships"],
    queryFn: () => fetchStarships(),
  });

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    <p>Data Geldi</p>;
  }
};

export default StarShips;

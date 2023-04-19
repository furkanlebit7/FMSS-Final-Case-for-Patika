import axios from "axios";

export const fetchStarships = async () => {
  const { data } = axios(`${process.env.REACT_APP_API_KEY}/starships`);

  return data;
};

import axios from "axios";

export const fetchStarships = async ({ pageParam = 1 }) => {
  const { data } = await axios(
    `${process.env.REACT_APP_API_KEY}/starships/?page=${pageParam}`
  );

  return data;
};

import axios from "axios";

//Fetchs all starships
export const fetchStarships = async ({ pageParam = 1 }) => {
  const { data } = await axios(
    `${process.env.REACT_APP_BASE_API}/starships/?page=${pageParam}`
  );

  return data;
};
//Fetchs single starship bu id
export const fetchStarship = async (id) => {
  const { data } = await axios(
    `${process.env.REACT_APP_BASE_API}/starships/${id}`
  );

  return data;
};

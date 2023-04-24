//PACKAGES
import React from "react";
import { Link } from "react-router-dom";

const StarshipCard = ({ starship }) => {
  return (
    <Link
      //direct to link that last 2 characters of coming link
      to={`/starship/${starship.url.slice(32, -1)}`}
      className="border p-3 rounded flex items-center flex-col border-gray-300 shadow-xl dark:border-gray-600 dark:bg-darkMain "
    >
      <div className="h-36">
        <img
          loading="lazy"
          className="h-28 hover:animate-pulse hover:scale-125 transition-all ease-in-out"
          alt="starship"
          src={require(`../../assets/images/starships/${starship.name}.png`)}
        />
      </div>
      <p className="font-bold text-lg dark:text-red-500 text-blue-600 my-2">
        {starship.name}
      </p>
      <div>
        <p className="font-bold text-sm">
          Model : <span className="font-normal text-sm">{starship.model}</span>
        </p>
        <p className="font-bold text-sm">
          Hyperdrive Rating :
          <span className="font-normal text-sm ml-2">
            {starship.hyperdrive_rating}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default StarshipCard;

import React from "react";

const StarshipCard = ({ starship }) => {
  return (
    <div className="border p-3 rounded flex items-center flex-col border-gray-300 shadow-xl dark:border-gray-600 dark:bg-darkMain ">
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
    </div>
  );
};

export default StarshipCard;

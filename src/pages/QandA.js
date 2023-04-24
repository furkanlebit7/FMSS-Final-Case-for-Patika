import { Accordion } from "flowbite-react";
import React from "react";
import QandA from "../helpers/QandAList";

const Gallery = () => {
  return (
    <Accordion flush={true} alwaysOpen={false}>
      {QandA.map((qa) => (
        <Accordion.Panel>
          <Accordion.Title>{qa.text}</Accordion.Title>
          <Accordion.Content className="bg-transparent dark:bg-transparent">
            <p className="mb-2 text-gray-700 dark:text-gray-200">{qa.answer}</p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default Gallery;

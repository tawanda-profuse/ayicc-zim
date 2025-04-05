import {
  faChevronDown,
  faChevronUp,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <button
            className={`flex justify-between w-full items-center text-xl bg-ayicc-light-green mb-2 p-2 ${
              activeIndex === index ? "font-bold" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.text}
            <FontAwesomeIcon
              icon={activeIndex === index ? faChevronUp : faChevronDown}
              className="text-sm"
            />
          </button>
          <ul
            className={`bg-white list-disc pl-8 transition-all text-lg py-2 ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {item.details && item.details.length > 0 && (
              <>
                {item.link && (
                  <li key={`link-${index}`}>
                    <a href={item.link} target="_blank" className="underline">
                      (View Details <FontAwesomeIcon icon={faExternalLink} />)
                    </a>
                  </li>
                )}
                {item.details.map((answer, detailIndex) => (
                  <li key={`${index}-${detailIndex}`}>{answer}</li>
                ))}
              </>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

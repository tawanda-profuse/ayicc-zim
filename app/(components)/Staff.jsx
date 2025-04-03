import React from "react";
import mhandu from "../../public/images/mhandu.jpg";
import tashinga from "../../public/images/tashinga-chikomba.jpg";
import panashe from "../../public/images/panashe.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Staff = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-8 font-serif">
      {[
        {
          name: "Jean-Betrand Mhandu",
          title: "National Coordinator",
          image: mhandu,
          phone: "0736622454",
        },
        {
          name: "Tashinga Chikomba",
          image: tashinga,
          title: "Environmental Scientist",
        },
        {
          name: "Panashe Zwarekwa Sakupwanya",
          image: panashe,
          title: "Projects Manager",
        },
      ].map((staff, index) => (
        <div className="flex flex-col gap-4 text-lg" key={index}>
          <Image src={staff.image} />
          <div className="flex flex-col gap-2 p-2">
            <h3>
              {staff.name} - <strong>{staff.title}</strong>
            </h3>
            {staff.phone && (
              <span className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} className="w-[2rem]"/>
              <a href={`mailto:${staff.phone}`} className="underline">
                {staff.phone}
              </a>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;

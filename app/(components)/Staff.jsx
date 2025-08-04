import React from "react";
import mhandu from "../../public/images/IMG_9029.jpg";
import tashinga from "../../public/images/tashinga-chikomba.jpg";
import lovemore from "../../public/images/lovemore.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Staff = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-8 my-8 font-serif">
      {[
        {
          name: "Jean-Betrand Mhandu",
          title: "National Coordinator",
          image: mhandu,
          phone: "0736622454",
        },
        {
          name: "Lovemore Dhobha",
          image: lovemore,
          title: "Director Climate Change Management Department",
        },
        {
          name: "Tashinga Chikomba",
          image: tashinga,
          title: "Environmental Scientist",
        }
      ].map((staff, index) => (
        <div className="flex flex-col gap-4 text-lg shadow-lg shadow-[#ccc] border border-[#ccc] rounded-md" key={index}>
          <Image
            src={staff.image}
            alt={staff.name}
            className="mx-auto w-full max-h-[70vh] object-contain"
          />
          <div className="flex flex-col items-center md:items-start gap-2 p-2">
            <h3>
              {staff.name} - <strong>{staff.title}</strong>
            </h3>
            {staff.phone && (
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faPhone} className="w-[2rem]" />
                <a href={`tel:${staff.phone}`} className="underline">
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

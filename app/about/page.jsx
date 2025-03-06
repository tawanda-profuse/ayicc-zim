"use client";
import {
  faFish,
  faTrash,
  faTree,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Image from "next/image";
import dryLandOverVast from "../../public/images/dry-land-overcast.png";

const page = () => {
  useEffect(() => {
    document.title = "About Us - AYICC Zim";
  }, []);
  return (
    <main>
      <section className="py-[2rem] px-[1rem] md:px-[4rem]">
        <h1 className="heading-special text-3xl">AYICC-Zimbabwe Overview</h1>
        <p className="text-color-2 my-[1rem]">
          African Youth Initiative on Climate Change Zimbabwe (AYICC) is a
          platform for African youths led by youths in influencing climate
          action through areas such as engaging young people and creating
          resilient communities through climate change awareness programs. AYICC
          is a group of young volunteers who are dedicated and passionate about
          the environment. Over the years, it has been working with the
          governments on the implementation of national and international
          commitments on climate change mitigation and adaptation so as to
          increase sustainability, promote energy and water efficiency.
        </p>
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Goal</h2>
          <p className="text-color-2">
            To develop capacity and strong partnerships among youths in Africa
            so that they are better equipped to address climate change in their
            countries for the benefit of the present and future generations.
          </p>
        </div>
        <Image
          src={dryLandOverVast}
          className="w-full md:w-2/4 border border-black h-[50vh]"
          alt="Dry land and overcast weather"
        />
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src={dryLandOverVast}
          className="w-full md:w-2/4 border border-black h-[50vh]"
          alt="Dry land and overcast weather"
        />
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Vision</h2>
          <p className="text-color-2">
            Empowered youths who can influence decisions on the adoption of
            nature based solutions towards climate resilience.
          </p>
        </div>
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Mission</h2>
          <p className="text-color-2">
            To increase climate resilience in Zimbabwe and Africa through youth
            led climate advocacy and climate initiatives.
          </p>
        </div>
        <Image
          src={dryLandOverVast}
          className="w-full md:w-2/4 border border-black h-[50vh]"
          alt="Dry land and overcast weather"
        />
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src={dryLandOverVast}
          className="w-full md:w-2/4 border border-black h-[50vh]"
          alt="Dry land and overcast weather"
        />
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Objectives</h2>
          <ol className="text-color-2 list-decimal px-6">
            <li className="mb-[0.5rem]">
              To promote sustainable dialogue among the youth, governments,
              CSOs, development partners and UN agencies with regard to climate
              change in Africa.
            </li>
            <li className="mb-[0.5rem]">
              To build solidarity among young people in the African Countries
              for the purpose of enhancing their role in the climate change
              negotiations and implementation processes.
            </li>
            <li className="mb-[0.5rem]">
              To support the capacity building, development and integration of
              youths in all aspects of climate change in their region.
            </li>
            <li className="mb-[0.5rem]">
              To promote youth agenda on climate change, climate justice and
              meaningful participation at community, national and international
              levels.
            </li>
            <li className="mb-[0.5rem]">
              To disseminate information in order to raise climate awareness as
              well as widen AYICC membership base.
            </li>
            <li className="mb-[0.5rem]">
              To facilitate participatory action research on the impact of
              climate change on African youths and climate change adaptation and
              mitigation strategies.
            </li>
          </ol>
        </div>
      </section>
      
      <section className="py-[2rem] px-[4rem] bg-ayicc-light-green flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-2/4 flex flex-col gap-4 text-[#002E5B]">
          <h4 className="font-bold text-xl">Activities</h4>
          <p>
            To increase climate resilience in Zimbabwe and Africa through
            youth-led climate advocacy and initiatives, we participate in these activities.
          </p>
        </div>
        <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 items-center justify-center">
          {[
            {
              icon: faTree,
              text: "Tree Planting",
            },
            {
              icon: faTrash,
              text: "Waste Management",
            },
            {
              icon: faFish,
              text: "Fish Farming",
            },
            {
              icon: faVolumeHigh,
              text: "Thursday Climate Talk",
            },
          ].map((item, index) => (
            <div className="flex items-center gap-8 md:gap-4 text-[white]" key={index}>
              <FontAwesomeIcon icon={item.icon} className="text-[6rem] md:text-5xl" />
              <div className="flex flex-col font-bold">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;

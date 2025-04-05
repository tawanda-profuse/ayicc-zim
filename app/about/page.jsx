"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import catchThemYoung2 from "../../public/images/catch-them-young-2.jpg";
import trash from "../../public/images/trash.jpg";
import chiveroChallenge2 from "../../public/images/chivero-challenge-2.jpg";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Staff from "../(components)/Staff";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const page = () => {
  useEffect(() => {
    document.title = "About Us - AYICC Zimbabwe";
  }, []);

  return (
    <>
      <header className="min-h-[80vh] w-full flex flex-col gap-12 items-center justify-center select-none bg-about">
        <h1
          className={`text-white uppercase text-6xl md:text-9xl slide-in text-center ${poppinsBlack.className}`}
        >
          About Us
        </h1>
      </header>
      <main>
        <section className="py-[2rem] px-[1rem] md:px-[4rem]">
          <h1 className={`heading-special text-4xl ${poppinsBlack.className}`}>
            AYICC Zimbabwe Overview
          </h1>
          <p className="mt-[4rem] md:my-[1rem] text-xl">
            African Youth Initiative on Climate Change Zimbabwe (AYICC) is a
            platform for African youths led by youths in influencing climate
            action through areas such as engaging young people and creating
            resilient communities through climate change awareness programs.
            AYICC is a group of young volunteers who are dedicated and
            passionate about the environment. Over the years, it has been
            working with the governments on the implementation of national and
            international commitments on climate change mitigation and
            adaptation so as to increase sustainability, promote energy and
            water efficiency.
          </p>
        </section>
        <section
          className="py-[1rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4"
          id="goals"
        >
          <div className="grid w-full md:w-2/4 gap-y-4">
            <h2
              className={`heading-special text-4xl ${poppinsBlack.className}`}
            >
              Our Goal
            </h2>
            <p className="text-xl">
              To develop capacity and strong partnerships among youths in Africa
              so that they are better equipped to address climate change in
              their countries for the benefit of the present and future
              generations.
            </p>
          </div>
          <Image
            src={trash}
            className="w-full md:w-2/4 h-auto"
            alt="People cleaning"
          />
        </section>
        <section
          className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4"
          id="vision"
        >
          <Image
            src={catchThemYoung2}
            className="w-full md:w-2/4 h-auto"
            alt="Planting trees"
          />
          <div className="grid w-full md:w-2/4 gap-y-4">
            <h2
              className={`heading-special text-4xl ${poppinsBlack.className}`}
            >
              Our Vision
            </h2>
            <p className="text-xl">
              Empower young people to influence decisions on Environment and
              Climate Initiatives, especially through innovation and
              nature-based solutions towards climate resilience.
            </p>
          </div>
        </section>
        <section
          className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4"
          id="mission"
        >
          <div className="grid w-full md:w-2/4 gap-y-4">
            <h2
              className={`heading-special text-4xl ${poppinsBlack.className}`}
            >
              Our Mission
            </h2>
            <p className="text-xl italic font-bold">
              To increase climate resilience in Zimbabwe and Africa through
              youth-led climate advocacy and projects.
            </p>
            <ol className="list-decimal px-6 text-xl pl-8">
              <li className="mb-[0.5rem]">
                To promote sustainable dialogue among the youth, governments,
                CSOs, development partners and UN agencies with regard to
                climate change in Africa.
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
                meaningful participation at community, national and
                international levels.
              </li>
              <li className="mb-[0.5rem]">
                To disseminate information in order to raise climate awareness
                as well as widen AYICC membership base.
              </li>
              <li className="mb-[0.5rem]">
                To facilitate participatory action research on the impact of
                climate change on African youths and climate change adaptation
                and mitigation strategies.
              </li>
            </ol>
          </div>
          <Image
            src={chiveroChallenge2}
            className="w-full md:w-2/4 h-auto"
            alt="Dry land and overcast weather"
          />
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] md:h-screen flex flex-col items-center justify-center gap-8 bg-about-history"
          id="history"
        >
          <h2
            className={`text-center text-white font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} mb-[3rem]`}
          >
            History
          </h2>
          <p className="text-xl text-white font-semibold">
            Against the background of promoting vigorous climate change
            mitigation and adaptation through education which is an essential
            element in building climate change resilience Thursday Climate Talk
            #TCT was launched in June 2019. This program runs on a weekly basis
            where experts, organizations among other stakeholders are hosted as
            guests. The program has a broader scope hosting a plethora of topics
            ranging from gender and climate, entrepreneurial adventures, Climate
            Smart Agriculture amongst other issues. The main goal behind this is
            to help young people understand and address the impacts of climate
            change, encourage changes in their attitude and behavior whilst
            helping them adapt to climate change-related trends.
          </p>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-[80vh] flex flex-col items-center justify-evenly gap-8 text-black"
          id="staff"
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className}`}
          >
            Staff
          </h2>
          {/* <Staff/> */}
          <a
            href="https://drive.google.com/file/d/1M2J_UcfJvUmtHOQA9Z0cyLOrd_XUE4NE/view?usp=sharing"
            target="_blank"
            className="text-xl font-semibold text-center transition-all hover:underline text-ayicc-dark-green"
          >
            View Our Organogram{" "}
            <FontAwesomeIcon icon={faExternalLink} className="w-[1rem]" />
          </a>
        </section>
        <section
          className="pt-[2rem] pb-[3rem] bg-about-key-areas"
          id="thematic-areas"
        >
          <h3
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} mb-[3rem]`}
          >
            Our Key Thematic Areas
          </h3>
          <div className="grid grid-cols-1 items-start justify-center my-[4rem] px-[1rem] md:px-[4rem]">
            {[
              {
                heading: "Climate change mitigation",
                paragraph:
                  "These are efforts to reduce or prevent emission of greenhouse gases.The world is moving towards a low- carbon society and certain strategies can be adopted to achieve this includes growing trees, reducing our carbon footprint by the practise of using renewable and clean energy e.g. cycling instead of driving or cook stove design- strategies that improve the energy efficiency of current equipment.",
              },
              {
                heading: "Climate Change Adaptation",
                paragraph:
                  "Climate change adaptation involves taking practical actions to manage risks from climate impacts, protecting communities and strengthening their resilience. It is a shared responsibility: governments, businesses, households, youth and women.",
              },
              {
                heading: "Gender & Climate Change",
                paragraph:
                  "Climate change has a greater impact on those sections of the population that are most reliant on natural resources for their livelihoods and have the least capacity to respond to natural hazards. Women commonly face higher risks and greater burdens from the impacts of climate change in situations of poverty, and the majority of the world’s poor are women. Women’s unequal participation in decision-making processes and labor markets compound inequalities and often prevent women from fully contributing to climate-related planning, policy-making and implementation. AYICC acknowledges that women’s participation in climate issues will result in greater responsiveness to citizen’s needs and improved outcomes of climate related projects and policies.",
              },
              {
                heading: "Climate Education",
                paragraph:
                  "Education is an essential element of the global response to climate change. AYICC Zimbabwe always conducts Climate Change, Climate Smart Agriculture, Environmental, Wetlands and Waste Management Workshops and education sessions in schools, universities and communities.",
              },
              {
                heading: "Climate Change Policy/Advocacy",
                paragraph:
                  "Since its inception, AYICC Zimbabwe has been actively participating in the development and implementation of the several policies and strategies and plans at national level. These include: Energy Policy, Climate Change Policy and Strategy, IntendedNationally Determined Contributions, National Adaptation Plan, National Positions on Climate Change and Climate Smart Agriculture Manual.",
              },
              {
                heading: "Climate Smart Agriculture",
                paragraph:
                  "Climate Change is negatively impacting affecting the agricultural sector with negative impacts and fish farming is one of the methods to adapt to the effects. We have and are still conducting workshops and awareness programs on Climate Smart Agriculture practices encouraging communities to engage more in climate smart practices and improve their yields sustainable.",
              },
              {
                heading: "Bio - diversity and Climate Change",
                paragraph:
                  "AYICC-Zim is aware of the importance of wetlands in absorbing carbon dioxide, to ensure sustainable conservation of wetlands AYICC- Zim is part of the National Wetlands Committee. AYICC Zimbabwe has led and coordinated eight (8) Chivero Clean-ups in partnership with Zimbabwe parks and wildlife, Environmental Management Agency (EMA), Kuimba Shiri, NGO’s, Lake Chivero Users Association and Volunteers, with more than 1 700 participants removing more than 70 tons of waste.",
              },
            ].map((item, index) => (
              <div className="flex flex-col gap-6" key={index}>
                <h3 className="text-2xl heading-special mt-[2rem]">
                  {`${index + 1}. `}
                  {item.heading}
                </h3>
                <p className="font-semibold md:w-[70%]">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

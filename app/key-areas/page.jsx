'use client'
import React, { useEffect } from "react";
import waterHourGlass from "../../public/images/water-hour-glass.png";

const page = () => {
  useEffect(() => {
    document.title = "Key Areas - AYICC Zim";
  }, []);
  return <main>
    <section
        className="pt-[2rem] pb-[3rem]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${waterHourGlass.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h3 className="text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-3xl">
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
  </main>;
};

export default page;

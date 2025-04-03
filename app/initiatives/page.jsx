"use client";
import React, { useEffect } from "react";
import catchThemYoung from "../../public/images/catch-them-young.jpg";
import conference3 from "../../public/images/conference-3.jpg";
import conference4 from "../../public/images/conference-4.jpg";
import environment from "../../public/images/environment.jpg";
import biodiversity from "../../public/images/biodiversity.jpg";
import research from "../../public/images/research.jpg";
import { Poppins } from "next/font/google";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Initiatives = () => {
  useEffect(() => {
    document.title = "Our Initiatives | AYICC";
  }, []);

  return (
    <>
      <header
        className="min-h-[50vh] md:min-h-[80vh] w-full flex flex-col gap-12 items-center justify-center select-none bg-no-repeat bg-left md:bg-top bg-initiatives"
      >
        <h1
          className={`text-white uppercase text-5xl md:text-9xl slide-in text-center ${poppinsBlack.className}`}
        >
          Initiatives
        </h1>
      </header>
      <main className="bg-ayicc-dark-green">
        <section
          className="md:pt-0 bg-white flex flex-col md:flex-row items-start justify-center gap-4"
          id="awareness"
        >
          <div className="pt-12 flex flex-col items-center w-full md:w-2/4">
            <h2
              className={`text-center p-4 heading-special text-4xl ${poppinsBlack.className}`}
            >
              Awareness
            </h2>
            <p className="my-[1rem] text-xl text-center p-4">
              AYICC Zimbabwe has hosted and participated in a lot of radio, and
              TV programs with major broadcasters locally, Nationally and
              internationally.{" "}
            </p>
          </div>
          <div
            className="w-full md:w-2/4 min-h-[50vh] md:h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${conference4.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${catchThemYoung.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="advocacy"
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl mb-12 ${poppinsBlack.className} text-white`}
          >
            Advocacy
          </h2>
          <p className="text-white text-xl my-4 font-semibold">
            Zimbabwean children and youth have been actively engaged in the
            development of Country’s NDCs, NAPs, and LEDs while also being
            actively involved in the revision processes of environmental
            legislation such as the Forestry Act and the Environmental
            Management Act. Having played a huge part in formulating the above
            strategies, plans, policy briefs and legislation, youths throughout
            the country have a sense of ownership and responsibility to ensure
            their implementation and accountability. And, this has been evident
            in the gradual increase of youth participants at COPs since COP21.
          </p>
          <p className="text-white text-xl my-4 font-semibold">
            However, there is still a long way until we achieve our climate
            ambitions and goals as a country, continent and globe. Young people
            particularly from rural and non-urban communities are still
            vulnerable to the effects of climate change in their day-to-day
            lives as water sources keep drying up, and loss of biodiversity
            especially deforestation has caused an ecosystem shift which has
            negative impacts on their homes, soil, agriculture and other forms
            of livelihoods. While children and youth in Zimbabwe have shown an
            improved understanding of climate change, there is a need to enhance
            their capacity to advocate for reductions in emissions, better
            access to climate finance, and ensure that our leaders are adhering
            to the Paris Agreement by actively participating in the Global
            Stocktake process.
          </p>
          <p className="text-white text-xl my-4 font-semibold">
            Has been leading Climate Change Advocacy for Young People in
            Zimbabwe and Africa. Ensuring that their voices and ideas are
            well-represented and implemented. Adding on to National, Regional
            and International Position Papers AYICCZim developed Policy Briefs,
            Statements and Dialogue to contribute to the decision making.
          </p>
          <ul className="text-white text-xl my-4 list-disc pl-6 font-semibold underline">
            <li>
              <a
                href="https://drive.google.com/file/d/1N7WWpLSwFo_rjpUcoa365FzLGIWrKfyR/view?usp=drivesdk"
                target="_blank"
              >
                Children and Youth Policy Brief on the Zimbabwe Climate Change
                Management Bill.pdf
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1OJIMA4eLS1Pa-8UBwRdO0eKv7mlg8Jpz/view?usp=drivesdk"
                target="_blank"
              >
                Final Zimbabwe Youth Position Paper.pdf
              </a>
            </li>
          </ul>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen flex flex-col items-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${conference4.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="climate-education"
        >
          <h2
            className={`text-center font-bold underline md:underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Climate Education
          </h2>
          <p className="text-white text-xl my-4 font-semibold">
            Climate education is a cornerstone of AYICC Zimbabwe's mission to
            empower young people with the knowledge and skills needed to address
            climate change. Through workshops, school programs, and community
            outreach, we aim to raise awareness about the causes and impacts of
            climate change. Our initiatives focus on promoting sustainable
            practices, such as climate-smart agriculture, renewable energy
            adoption, and waste management. By educating the next generation, we
            are fostering a culture of environmental stewardship and equipping
            youth to become advocates for a sustainable future.
          </p>
        </section>
        <section
          className="md:pt-0 flex flex-col md:flex-row items-center justify-center gap-4 bg-ayicc-gold"
          id="bio-conservation"
        >
          <div className="py-6 flex flex-col items-center w-full md:w-2/4">
            <h2
              className={`heading-special text-4xl text-center underline ${poppinsBlack.className}`}
            >
              Bio Diversity Conservation
            </h2>
            <ul className="my-[1rem] list-disc pl-6 text-xl font-semibold">
              <li>Wetland Protection and Management </li>
              <li>Tree planting</li>
              <li>Work Camps</li>
            </ul>
          </div>
          <div
            className="w-full md:w-2/4 min-h-[50vh] md:h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${biodiversity.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen flex flex-col items-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${environment.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="waste-management"
        >
          <h2
            className={`text-center font-bold underline md:underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Waste Management
          </h2>
          <p className="text-white text-xl my-4 font-semibold">
            Waste management is a critical focus area for AYICC Zimbabwe as we
            strive to promote sustainable practices in communities. Through
            clean-up campaigns, recycling initiatives, and educational programs,
            we aim to reduce waste and its harmful impact on the environment.
            Our efforts include engaging youth and local communities in proper
            waste segregation, composting, and advocating for policies that
            support a circular economy. By addressing waste management
            challenges, we are contributing to a cleaner, healthier, and more
            sustainable future for Zimbabwe and beyond.
          </p>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen flex flex-col items-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${conference3.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="food-security"
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Food Security
          </h2>
          <p className="text-white text-xl my-4 font-semibold">
            Food security is a vital focus area for AYICC Zimbabwe as we work to
            address the challenges posed by climate change on agriculture and
            food systems. Through initiatives such as climate-smart agriculture,
            sustainable farming practices, and community workshops, we aim to
            empower farmers and youth with the knowledge and tools to adapt to
            changing environmental conditions. By promoting innovative solutions
            like agroforestry, water conservation, and crop diversification, we
            strive to ensure that communities can achieve long-term food
            security while preserving natural resources for future generations.
          </p>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen flex flex-col items-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${research.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top right",
          }}
          id="research"
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Research
          </h2>
          <p className="text-white text-xl my-4 font-semibold">
            Research is a fundamental pillar of AYICC Zimbabwe's efforts to
            address climate change and promote sustainable development. By
            conducting participatory action research, we aim to understand the
            impacts of climate change on youth and communities, as well as
            identify effective adaptation and mitigation strategies. Our
            research initiatives focus on areas such as renewable energy,
            biodiversity conservation, climate-smart agriculture, and waste
            management. Through collaboration with academic institutions,
            government agencies, and international organizations, we strive to
            generate data-driven solutions that empower communities and inform
            policy decisions for a sustainable future.
          </p>
        </section>
      </main>
    </>
  );
};

export default Initiatives;

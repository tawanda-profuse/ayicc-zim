"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Profiles = () => {
  const userData = [
    {
      name: "John Kuchingamira",
      email: "kuchingamirajohn@gmail.com",
      phone: "0776458955",
      city: "Nyanga",
      projectDetails: "",
      sector: "Waste Management & Recycling",
      challenge: "Finances",
      purpose: "To address climate change issues through generating income.",
    },
    {
      name: "Natasha TC Mpofu",
      email: "mpofunatashatc@gmail.com",
      phone: "0716224081",
      city: "Gweru",
      projectDetails:
        "In the organization I work in at Save Our Environment Trust we running a project that deals with plastic waste where plastic is mixed with river sand and melted to produce bricks for paving and some for building. This project has helped manage waste and it has helped generate income that is of help to the communities.",
      sector: "Waste Management & Recycling",
      challenge:
        "They are challenges faced such as lack of funds to implement because the project requires funds such as fund to buy the fuel used to buy the river sand since it uses electricity or gas to generate.",
      purpose:
        "I'm studying Environmental safety health and quality management SHEQ and this program will help me come up with innovative ideas that will also help me come up with an innovative project that will help in climate change.",
    },
    {
      name: "Mabel Nokhuthula Piki",
      email: "mpiki2030@gmail.com",
      phone: "264000000000",
      city: "chinhoyi",
      projectDetails:
        "My project proposal is to disseminate tangible climate information to people, being an EnRoads Climate ambassador and a climate activist, I believe holding climate workshops with tangible data like through using simulators will open people's eyes to the reality of climate change as well as the impacts of what they are doing in curbing it. I aim to have such workshops with university and secondary school students across the country. The innovation is in using interactive climate simulators to engage participants and provoke their minds to climate action",
      sector: "Climate information dissemination",
      challenge:
        "My biggest challenge is to get people to participate in climate related workshops, because people are busy looking for ways to put food on the table and climate workshops aren't meaningful to them unless if they  get food/t-shirts from the workshop. Despite the importance of climate information dissemination so that people will be aware of what we are fighting against( climate change), people in general lack that knowledge and continue in their ignorance and skepticism. And me being an EnRoads Climate ambassador I seek to adress this given funding",
      purpose:
        "I am a passionate climate activist and one person who is pro sustainable development for the future generation and a secure environment in the now. When I started my En-ROADS Climate Interactive training the only thing that would come into my mind upon hearing climate change was fossil fuels and temperature rise, having been exposed to climate information through the training I have come to realize there is a lot to talk about and to do to help the situation and I would definitely want everyone to be exposed to such information and in the process I would make an impact adding to my self actualization.",
    },
    {
      name: "Farai Maringa",
      email: "fmaringa95@gmail.com",
      phone: "818000000000",
      city: "Harare",
      projectDetails: "",
      sector: "Waste Management & Recycling",
      challenge: "Engineering Technology",
      purpose:
        "I believe there is so much work to be done in Zimbabwe towards a sustainable environment with clean streets which are free from plastics and any other harmful substance.",
    },
    {
      name: "Blessing M. Muzingwani",
      email: "blemulamzy@gmail.com",
      phone: "264000000000",
      city: "Harare",
      projectDetails:
        "My project focuses on innovative waste management and recycling solutions that not only reduce landfill waste but also repurpose it into valuable products. I want to use advanced sorting technologies to efficiently separate recyclables like plastic, glass, rubber, metal, and textiles, allowing these materials to be transformed into new, usable items. For example, manufacturing eco-friendly bricks using recycled glass, plastic, and rubber. These bricks are durable, cost-effective, and contribute to reducing construction waste. In addition, recycling polyester wool into new fabrics, which can be used to create sustainable clothing or insulation materials. Plastics are processed and turned into high-quality, durable products such as outdoor furniture or construction materials, while metal scraps are melted and repurposed for new products like automotive parts or home appliances. I also want to develop innovative products from recycled rubber, such as playground flooring and road surfacing materials, reducing the need for new raw materials. Glass waste is transformed into tiles, countertops, or decorative items, while polyester wool is used in eco-friendly insulation and upholstery. By integrating these materials into a circular economy, we minimize waste, conserve resources, and promote sustainable manufacturing practices across various industries. This comprehensive approach reduces environmental impact, creates jobs, and contributes to a greener future.",
      sector: "Waste Management & Recycling",
      challenge:
        "The biggest challenge I face in implementing this waste management and recycling project is ensuring the efficient and consistent quality of recycled materials. While sorting technologies have advanced, achieving the proper separation of materials like plastics, metals, glass, and textiles remains a complex task. Contamination of recyclables with non-recyclable waste can degrade the quality of the final products, which affects their commercial viability and sustainability. Additionally, there is a need for widespread infrastructure and community awareness. Many people still lack proper recycling practices or understanding of how to separate waste effectively. Building the necessary infrastructure to handle large-scale recycling and educating the public to change waste disposal habits are crucial steps for success. Finally, securing funding for research and development of new recycling technologies, as well as creating demand for products made from recycled materials, remains an ongoing challenge. The market for recycled goods can sometimes be limited due to higher production costs or consumer hesitation, making it difficult to establish a financially sustainable model for large-scale implementation",
      purpose:
        "I want to participate in the Zimbabwean Youth Climate Innovation Hub 2024 because it offers a unique platform to collaborate with like-minded individuals and organizations focused on innovative climate solutions. As someone passionate about sustainable waste management and recycling, I believe this program will provide invaluable knowledge, mentorship, and resources to refine and scale my project. The Hub will help me connect with experts and fellow youth innovators, allowing me to share ideas and gain new perspectives on tackling climate-related challenges. The exposure to cutting-edge technologies and strategies for environmental sustainability will significantly enhance my project's impact. Additionally, the training and networking opportunities will enable me to strengthen my leadership skills, better manage resources, and expand the reach of my initiative. Through participation, I aim to gain insights on policy advocacy and how to engage communities more effectively in climate also help me understand how to secure funding and partnerships to further develop my project, ensuring its long-term success and scalability. Ultimately, being part of this program will empower me to contribute more meaningfully to Zimbabwe's climate goals, while providing the tools and support needed to drive tangible, sustainable change in waste management and recycling practices.",
    },
    {
      name: "Gondai Bangidza",
      email: "bangidzag@gmail.com",
      phone: "264000000000",
      city: "Harare",
      projectDetails: `Climate Connect" is an innovative online magazine and podcast that will provide a dedicated platform for African youth to engage with climate change issues. By educating, inspiring, and empowering young people, we can foster a new generation of climate-conscious leaders and change-makers in Africa. We believe that "Climate Connect" has the potential to make a significant impact on the climate change debate in Africa and contribute to a more sustainable future for the continent.`,
      sector: "Climate education/advocacy",
      challenge:
        "The requisite start up funds to push the idea as most require high gadget equipment to create the online content. Creators and participants are identified but the needs to push quality information is key.",
      purpose:
        "The program will help me learn skills and knowledge I do not have to help me push my innovation and to drive the climate education and knowledge.",
    },
    {
      name: "Olivia Fiona Marimira",
      email: "oliviamarimira@gmail.com",
      phone: "0716106625",
      city: "Harare",
      projectDetails: "",
      sector: "Climate Adaptation & Resilience",
      challenge: "Support, finance and guidance",
      purpose:
        "Because I believe that this program a chance to grow, be innovative and network with a number of guidance from various fields",
    },
    {
      name: "Esther Mudombe",
      email: "esthermudombe2@gmail.com",
      phone: "0780902940",
      city: "Mt Darwin",
      projectDetails: "",
      sector: "",
      challenge: "",
      purpose:
        "To gain access to training, mentorship, and resources to enhance my skills and knowledge in climate innovation - Collaborate with other young innovators to develop and implement climate-resilient projects",
    },
    {
      name: "Loswitha Murugani",
      email: "Loswithamurugani@gmail.com",
      phone: "264000000000",
      city: "Victoria Falls",
      projectDetails:
        "Soil regeneration to help disadvantaged communities to adapt to the effects of climate change and regenerate the landscape through collaboration of communities, stakeholders and the government to create more livelihood options and create safety net programs that will help to restore degraded landscapes and restore the ecosystems. Using future tools and transdisciplinary action to engage with local people and leadership to create concrete sustainable solutions for climate change mitigation and adaptation.",
      sector: "Climate Adaptation & Resilience",
      challenge:
        "The challenge of funding to start the project with need for transport, and resources to get to places where change os really needed, fencing to reduce continued land degradation and promote natural regeneration. Engagement and knowledge platforms are lacking leaving most people having no information on how to address problems they are facing.There is a knowledge gap on what climate change is and what needs to he done in most local communities they see climate change as something caused by other developed countries and not their actions hence they do not believe they have to take action.",
      purpose:
        "This will help me to learn more about climate change mitigation measures and how to implement climate change efforts successfully in areas that i work in. Also a chance to network and see how other people are doing. Get help and insights from other professionals that have been studying and implementing climate change actions and also collaborating with other organizations that can help with resources, or finance that can help us to move forward with our vision for regeneration initiatives.",
    },
    {
      name: "TENDAI ZANO",
      email: "m23946c@muast.ac.zw",
      phone: "0719800573",
      city: "Marondera",
      projectDetails: "N/a",
      sector: "Sustainable Agriculture",
      challenge: "N/a",
      purpose:
        "to get knowledge on such innovation,to help develop sustainable farming practises",
    },
    {
      name: "Davidzo Chizhengeni",
      email: "davidzochizhengeni@gmail.com",
      phone: "0784458565",
      city: "Harare",
      projectDetails: "We plant tree seedlings.",
      sector: "Sustainable Agriculture",
      challenge:
        "Space to increase rhe number of trees, land issues is coupled with water and finance.",
      purpose: "To learn and collaborate.",
    },
    {
      name: "Chiyedza Mafunga",
      email: "chiyedzamafunga@gmail.com",
      phone: "0785 106 430",
      city: "Harare",
      projectDetails:
        "A community based resilience framework.The framework involves partcipatory governance whereby indigenous communities are involved in decision making processes towards building resilience by using their knowledge.",
      sector: "Climate Adaptation & Resilience",
      challenge: "Data Saturation and limited information from the community.",
      purpose:
        "I'm passionate about the environment, this program will help me to know the changes occurring in the environment as a result of climate change. It will help to gain insights and knowledge to solve challenges which came along with climate change.",
    },
    {
      name: "Bolyne Tafadzwa Chapeyama",
      email: "bolynechaps@gmail.com",
      phone: "0.100012602",
      city: "Harare",
      projectDetails: "",
      sector: "Climate Adaptation & Resilience",
      challenge:
        "The biggest problem has been to lack of capacity building and training on how to implement innovation in my community. I really need training from proposal writing, concept note writing and also implementing these initiatives.",
      purpose:
        "It will help me to gain experience in proposal writing and also implementing climate change projects in my area. I am hoping to be trained and capacitated in project management as well.",
    },
    {
      name: "Shawn Latimo Jubera",
      email: "shawnlatie&gmail.com",
      phone: "1.000002543",
      city: "Harare",
      projectDetails:
        "As the world grapples with climate change, environmental degradation, and social inequality, it is essential for passionate advocates to ensure a sustainable future aligned with the SDGs and global and national climate change policies. As an enthusiastic advocate for climate action and member of the Green Institute and Green Drinks, I am eager to join the Zimbabwean Youth Climate Innovation Hub 2024 to deepen my knowledge and skills. I am working on a paper on climate change and wetlands conservation. My goal is to promote sustainable and climate-resilient urban living through writing and publishing. I am committed to contributing to the global movement towards a greener future through research, writing, and advocacy. I would appreciate the opportunity to be part of part of the team",
      sector: "Climate Adaptation & Resilience",
      challenge: "Finance and publishing",
      purpose:
        "I want to participate in the Zimbabwean Youth Climate Innovation Hub to deepen my knowledge, enhance my skills, and contribute to sustainable solutions for climate change. My passion for environmental sustainability drives me to seek opportunities for growth and collaboration with like-minded individuals. I am certain that the Hub will provide me with valuable mentorship, networking opportunities, and hands-on experience, empowering me to make a meaningful impact in the fight against climate change. Through this program, I aim to develop innovative strategies for promoting sustainable urban living and contribute to the global movement for a greener future.",
    },
  ];

  const [filteredData, setFilteredData] = useState(userData);
  const uniqueCities = [...new Set(userData.map((item) => item.city))];
  const uniqueSectors = [
    ...new Set(
      userData.filter((item) => item.sector).map((item) => item.sector)
    ),
  ];

  return (
    <>
      <header className="min-h-[50vh] w-full flex flex-col md:flex-row gap-12 items-center justify-center select-none py-12 md:py-4 md:px-4 bg-[#444]">
        <h1
          className={`text-white md:bg-[#00000099] py-4 uppercase text-3xl md:text-6xl no-underline md:underline slide-in text-center w-full ${poppinsBlack.className}`}
        >
          Profiles
        </h1>
        <ul className="md:w-2/4 list-disc underline text-white text-xl flex flex-col gap-2">
          <li className="hover:pl-2 transition-all">
            <Link href="/innovation-hub" className="underline">
              Innovation Hub Home
            </Link>
          </li>
        </ul>
      </header>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
        <div className="mx-auto">
          <div className="flex md:items-center flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="filter" className="font-bold">
                Filter by City
              </label>
              <select
                className="mx-auto cursor-pointer border-2 border-[#ccc] py-2 px-3 rounded-md outline-none focus:border-ayicc-dark-green"
                id="filter"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setFilteredData(userData);
                  } else {
                    setFilteredData(
                      userData.filter((item) =>
                        item.city.includes(e.target.value)
                      )
                    );
                  }
                }}
              >
                <option value="">All</option>
                {uniqueCities.map((item, index) => (
                  <option key={index} value={item} className="capitalize">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="sector" className="font-bold">
                Filter by Sector
              </label>
              <select
                className="mx-auto cursor-pointer border-2 border-[#ccc] py-2 px-3 rounded-md outline-none focus:border-ayicc-dark-green"
                id="sector"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setFilteredData(userData);
                  } else {
                    setFilteredData(
                      userData.filter((item) =>
                        item.sector.includes(e.target.value)
                      )
                    );
                  }
                }}
              >
                <option value="">All</option>
                {uniqueSectors.map((item, index) => (
                  <option key={index} value={item} className="capitalize">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="md:text-center my-6">{filteredData.length} result(s)</p>
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 my-4 gap-4 border border-[#ccc] shadow-lg shadow-[#ccc] p-4 rounded-md"
            >
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>Full Name</strong>
                <p>{item.name}</p>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>Email Address</strong>
                <a href={`mailto:${item.email}`} className="underline">
                  {item.email}
                </a>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>Phone Number</strong>
                <a href={`tel:${item.phone}`} className="underline">
                  {item.phone}
                </a>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>City/Town</strong>
                <p>{item.city || "--"}</p>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>
                  Briefly describe your innovation/project. (250 Words Max)
                </strong>
                <p>{item.projectDetails || "--"}</p>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>Which sector does your innovation fall under?</strong>
                <p>{item.sector || "--"}</p>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>
                  What is the biggest challenge you face in developing or
                  scaling your innovation? (250 Words)
                </strong>
                <p>{item.challenge || "--"}</p>
              </div>
              <div className="flex flex-col gap-4 items-start flex-wrap">
                <strong>
                  Why do you want to participate in this program, and how will
                  it help you? (250 Words Max)
                </strong>
                <p>{item.purpose || "--"}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Profiles;

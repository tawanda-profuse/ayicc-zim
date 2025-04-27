import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const OpportunitiesPage = () => {
  return (
    <>
      <header className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-ayicc-light-green">
        <h1
          className={`text-white py-4 uppercase text-2xl md:text-6xl md:w-2/4 no-underline md:underline slide-in text-center ${poppinsBlack.className}`}
        >
          Available Opportunities
        </h1>
      </header>
      <section className="py-[2rem] px-[1rem] md:px-[4rem]">
        <div className="container mx-auto py-10 px-4 md:px-0">
          <h2 className={`heading-special text-4xl ${poppinsBlack.className}`}>
            Current Openings
          </h2>
          <ul className="list-disc pl-5 my-[4rem] text-xl">
            <li>
              <Link
                href="/opportunities/call-centre-agent"
                className="hover:underline text-ayicc-dark-green"
              >
                Call Centre Agent
              </Link>
            </li>
            <li>
              <Link
                href="/opportunities/sustainability-intern"
                className="hover:underline text-ayicc-dark-green"
              >
                Sustainability Intern
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OpportunitiesPage;

"use client";
import React, { useEffect } from "react";

const SustainabilityIntern = () => {
  useEffect(() => {
    document.title = "Sustainability Intern | AYICC";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Join our team as a Sustainability Intern. We are looking for a motivated individual to contribute to the shift towards more sustainable, efficient, and safe societies. Apply now!"
      );
  }, []);
  return (
    <>
      <header className="min-h-[35vh] w-full flex flex-col items-center justify-center bg-ayicc-light-green"></header>
      <section className="py-[2rem] px-[1rem] md:px-[4rem]">
        <div className="container mx-auto py-10 px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Job Description
          </h2>
          <p className="text-lg mb-4 font-bold">
            We are looking for a Sustainability Intern to join our
            sustainability team.
          </p>
          <p className="text-lg mb-4">
            Are you interested in contributing to the shift towards more
            sustainable, efficient, and safe societies? Are you interested in
            hands-on experience in sustainability?
          </p>
          <p className="text-lg mb-4">
            We are looking for a driven and proactive student to join our team
            as a Sustainability Intern. In this role, you will work closely with
            our Projects Manager, and play an important part in advancing and
            implementing AYICC Zimbabwe's sustainability initiatives.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Qualifications:
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>
              A bachelor's degree in Business, Economics, Civil Engineering,
              Sustainability, Environmental Studies, or a related field.
            </li>
            <li>A genuine interest in sustainability and climate action.</li>
            <li>
              Ability to work independently and has a solution-driven mindset.
            </li>
            <li>
              Committed to improvement and consistently motivated to pursue
              personal growth.
            </li>
            <li>Ability to speak and write in English.</li>
          </ul>
          <p className="text-lg my-4">
            We highly value your individual attributes and appreciate your
            engagement, curiosity, and humble personality. You should be
            flexible, communicative, and comfortable in a changing environment.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            What We Offer:
          </h2>
          <p className="text-lg mb-4">
            You will become part of a dynamic and inclusive workplace that
            values innovation, collaboration, and personal growth. As a
            Sustainability Intern at AYICC Zimbabwe, you will have the chance to
            immerse yourself in the real-world application of sustainability in
            business. You’ll work closely with experienced colleagues and
            portfolio companies, gaining hands-on experience in everything from
            ESG due diligence to data analysis, supplier risk mapping, and the
            implementation of impactful sustainability strategies — including
            integrating new regulatory requirements, such as CSRD, into our
            overall sustainability approach.
          </p>
          <p className="text-lg mb-4">
            If you have any questions regarding the position, please contact
            Jean-Betrand Mhandu at{" "}
            <a
              href="tel:+263736622454"
              className="text-ayicc-dark-green hover:underline"
            >
              +263736622454
            </a>{" "}
            or{" "}
            <a
              href="mailto:ayicczim@gmail.com"
              className="text-ayicc-dark-green hover:underline"
            >
              ayicczim@gmail.com
            </a>
            . We look forward to receiving your application as soon as possible;
            interviews will be conducted continuously. You are welcome to apply
            by sending your CV, Cover Letter and transcripts to{" "} 
            <a
              href="mailto:ayicczim@gmail.com"
              className="text-ayicc-dark-green hover:underline"
            >
              ayicczim@gmail.com
            </a>
            . Please note that we only accept applications sent to this email
            address.
          </p>
          <p className="text-lg mb-4 font-bold">
            We look forward to your application!
          </p>
        </div>
      </section>
    </>
  );
};

export default SustainabilityIntern;

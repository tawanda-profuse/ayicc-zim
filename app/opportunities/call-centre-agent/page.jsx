"use client";
import React, { useEffect } from "react";

const CallCentreAgent = () => {
  useEffect(() => {
    document.title = "Call Centre Agent | AYICC";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Join our team as a Call Centre Agent. We are looking for a motivated individual to handle inquiries and provide information about our organization. Apply now!"
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
          <p className="text-lg mb-4">
            We are looking for a Call Centre Agent to join our organization. The
            ideal candidate will be responsible for handling inquiries,
            providing information about our organisation, and providing on-call
            assistance. The Call Centre Agent will be the first point of contact
            for our organisation and will play a crucial role in ensuring
            engagement with the public. The successful candidate should have
            excellent communication skills, a friendly demeanor, and the ability
            to handle multiple tasks simultaneously.
          </p>
          <h3 className="text-xl font-bold mb-2">Responsibilities:</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Answer incoming calls and respond to public inquiries.</li>
            <li>Provide information about our organization and services.</li>
            <li>Assist with customer inquiries and complaints.</li>
            <li>
              Handling inquiries and responding to customers via phones, emails
              and WhatsApp.
            </li>
            <li>Directing inquiries to appropriate personnel or department</li>
            <li>Provide information about events and initiatives.</li>
            <li>Resolve complaints and issues.</li>
            <li>Maintain accurate records of interactions.</li>
            <li>Respond to emails.</li>
          </ul>
          <h3 className="text-xl font-bold my-4">
            Education Requirements / Qualifications:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>
              At least three O Levels and a full O level Certificate, including
              English Language.
            </li>
            <li>
              Diploma/Undergraduate degree in Marketing, Communications, or a
              related field is an advantage.
            </li>
            <li>Experience/knowledge of Microsoft Office.</li>
          </ul>
        </div>
        <p>
          To apply, send your updated CV and a brief cover letter to{" "}
          <a
            href="mailto:ayicczim@gmail.com"
            className="text-ayicc-dark-green hover:underline"
          >
            ayicczim@gmail.com
          </a>
        </p>
      </section>
    </>
  );
};

export default CallCentreAgent;

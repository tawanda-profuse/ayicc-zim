"use client";
import React, { useEffect } from "react";

const Initiatives = () => {
  useEffect(() => {
    document.title = "Our Initiatives | AYICC";
  }, []);
  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="heading-special text-5xl">Initiatives</h1>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Awareness</h2>
        <ul className="text-color-2 my-[1rem] list-disc pl-6 text-lg">
          <li>Radio</li>
          <li>TV</li>
          <li>Press Release</li>
        </ul>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Advocacy</h2>
        <p className="text-color-2 my-[1rem] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa a omnis, ut quae vero consequuntur velit cupiditate animi illo error.
        </p>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Climate Education</h2>
        <p className="text-color-2 my-[1rem] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa a omnis, ut quae vero consequuntur velit cupiditate animi illo error.
        </p>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Bio Diversity Conservation</h2>
        <ul className="text-color-2 my-[1rem] list-disc pl-6 text-lg">
          <li>Wetland Protection and Management </li>
          <li>Tree planting </li>
          <li>Work Camps </li>
        </ul>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Waste Management</h2>
        <p className="text-color-2 my-[1rem] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa a omnis, ut quae vero consequuntur velit cupiditate animi illo error.
        </p>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Food Security</h2>
        <p className="text-color-2 my-[1rem] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa a omnis, ut quae vero consequuntur velit cupiditate animi illo error.
        </p>
      </section>
      <section className="py-[2rem]">
        <h2 className="heading-special text-3xl">Research</h2>
        <p className="text-color-2 my-[1rem] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa a omnis, ut quae vero consequuntur velit cupiditate animi illo error.
        </p>
      </section>
    </main>
  );
};

export default Initiatives;

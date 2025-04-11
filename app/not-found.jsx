import Image from "next/image";
import Link from "next/link";
import React from "react";
import grass from "../public/images/grass.png";

const NotFound = () => {
  return (
    <>
    <header className="min-h-[35vh] bg-ayicc-light-green"></header>
    <main className="py-[2rem] px-[1rem] md:px-[4rem] min-h-[70vh]">
      <section className="flex flex-col md:flex-row items-start justify-center gap-[2rem]">
        <div className="flex flex-col w-full md:w-2/4 gap-[1rem]">
          <h1 className="heading-special text-3xl">Page Not Found</h1>
          <p className="text-color-2">
            The requested page does not exist or has been removed.{" "}
            <Link
              href="/contact"
              className="underline text-ayicc-dark-green font-semibold"
            >
              Contact the website owner
            </Link>{" "}
            for assistance.
          </p>
        </div>
        <Image
          src={grass}
          alt="Grass fields"
          className="w-full md:w-2/4 h-[80vh]"
        />
      </section>
    </main>
    </>
  );
};

export default NotFound;

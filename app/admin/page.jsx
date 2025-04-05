"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Poppins } from "next/font/google";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Admin = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);
  
  return (
    <>
      <header className="min-h-[25vh] bg-ayicc-light-green"></header>
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <section className="min-h-[60vh]">
        <h1 className={`heading-special text-4xl ${poppinsBlack.className}`}>
          Administrator Portal
        </h1>
        <ul className="list-disc pl-4 mt-12 text-xl flex flex-col gap-4">
          <li className="transition-all hover:pl-2">
            <Link href="/admin/events" className="underline hover:text-ayicc-light-green">Manage Events</Link>
          </li>
          <li className="transition-all hover:pl-2">
            <Link href="/admin/users" className="underline hover:text-ayicc-light-green">Manage Members</Link>
          </li>
        </ul>
      </section>
    </main>
    </>
  );
};

export default Admin;

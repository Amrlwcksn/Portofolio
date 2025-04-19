"use client"; // WAJIB kalau pakai Next.js App Router

import React from "react";

export default function Navbar() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="">
      <div className=" flex hover:scale-105 transition duration-200">
        <h1
          onClick={handleClick}
          className="mb-5 text-xl font-bold cursor-pointer "
        >
          Kembali Ke-atas
        </h1>
        <img src="/Images/arrowup.png" alt="" onClick={handleClick} className="w-10 h-10 -mt-2 cursor-pointer "/>

      </div>
    </nav>
  );
}

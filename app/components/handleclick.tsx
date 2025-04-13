"use client"; // WAJIB kalau pakai Next.js App Router

import React from "react";

export default function Navbar() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="">
      <div className="mt-5">
        <h1
          onClick={handleClick}
          className="mb-5 text-xl font-bold cursor-pointer"
        >
          Portofolio
        </h1>
      </div>
    </nav>
  );
}

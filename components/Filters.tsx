"use client";
import React, { useState } from "react";

const links = ["all", "Next 13", "frontend", " backend", "fullstack"];

const Filters = () => {
  const [activeLink, setActiveLink] = useState("all");
  const handleFilter = (link: string) => {
    setActiveLink(link);
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          onClick={() => handleFilter(link)}
          key={link}
          className={`${
            activeLink === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;

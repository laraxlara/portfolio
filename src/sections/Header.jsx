import React from "react";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header className="max-w-screen-2xl py-4 px-4 sticky top-0 text-gray-300 bg-[#292929] shadow-xl z-[1000] body-font py-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 bg-[#02dea3] rounded-full p-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 19l18 0"></path>
            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
          </svg>
          <span className="ml-3 text-xl text-gray-200">Lara Celic</span>
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

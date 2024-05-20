import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="md:ml-auto flex px-4 flex-wrap items-center text-base justify-center">
      <Link href="#home" className="mr-5 hover:text-[#02dea3]">
        Home
      </Link>
      <Link href="#about" className="mr-5 hover:text-[#02dea3]">
        About
      </Link>
      <Link href="#projects" className="mr-5 hover:text-[#02dea3]">
        Projects
      </Link>
      <Link href="#contact" className="mr-5 hover:text-[#02dea3]">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;

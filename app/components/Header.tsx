"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({ query: "(min-width: 1300px)" });
  const mobileMode = useMediaQuery({ query: "(max-width: 1299px)" });

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <header className={`absolute w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 ${nav ? "shadow-md py-4 xl:py-[1.6rem] md:px-8" : "bg-transparent shadow-none py-2 md:px-4"} mt-8`}>
      <div className="xl:container mx-auto flex justify-between items-center px-4">
        <ScrollLink to="home" smooth={true} spy={true} className="cursor-pointer">
          <Image src="/header/logo_header.svg" width={desktopMode ? 200 : 200} height={desktopMode ? 60 : 60} alt="logo" className={`${nav ? "hidden" : "block"} mr-4`} />
        </ScrollLink>
        <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden flex justify-end w-full pr-4">
          {nav ? <BiX className="text-4xl fixed top-4 right-4 z-50" /> : <BiMenuAltRight className="text-4xl" />}
        </div>
        {nav && (
          <div className="fixed inset-0 bg-white z-40">
            <nav className="flex flex-col h-full"> {/* Tag <nav> adicionada */}
              <div className="flex items-center justify-end p-4">
                <BiX className="text-4xl cursor-pointer" onClick={() => setNav(false)} />
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <ScrollLink to="home" smooth={true} spy={true} activeClass="active" className="cursor-pointer mb-6" onClick={handleLinkClick}>Become a renter</ScrollLink>
                <ScrollLink to="steps" smooth={true} spy={true} activeClass="active" className="cursor-pointer mb-6" onClick={handleLinkClick}>How it works</ScrollLink>
                <ScrollLink to="why" smooth={true} spy={true} activeClass="active" className="cursor-pointer mb-6" onClick={handleLinkClick}>Why choose us</ScrollLink>
                <ScrollLink to="cars" smooth={true} spy={true} activeClass="active" className="cursor-pointer mb-6" onClick={handleLinkClick}>Rental deals</ScrollLink>
                <div className="relative">
                  <ScrollLink to="testmonial" smooth={true} spy={true} activeClass="active" className="cursor-pointer mb-6" onClick={handleLinkClick}>Testimonials</ScrollLink>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <ScrollLink to="faq" smooth={true} spy={true} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>FAQ</ScrollLink>
                    <ScrollLink to="contact" smooth={true} spy={true} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Contact</ScrollLink>
                  </div>
                </div>
                {mobileMode && (
                  <div className="flex flex-col items-center mt-auto">
                    <button className="bg-black text-white px-8 py-2 rounded-full mb-4" onClick={handleLinkClick}>Sign In</button>
                    <button className="bg-blue-500 text-white px-8 py-2 rounded-full" onClick={handleLinkClick}>Sign Up</button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
        {desktopMode && (
          <nav className={`${nav ? "hidden" : "flex"} items-center space-x-6`}>
            <ScrollLink to="home" smooth={true} spy={true} activeClass="active" className="cursor-pointer">Become a renter</ScrollLink>
            <ScrollLink to="steps" smooth={true} spy={true} activeClass="active" className="cursor-pointer">How it works</ScrollLink>
            <ScrollLink to="why" smooth={true} spy={true} activeClass="active" className="cursor-pointer">Why choose us</ScrollLink>
            <ScrollLink to="cars" smooth={true} spy={true} activeClass="active" className="cursor-pointer">Rental deals</ScrollLink>
            <ScrollLink to="testmonial" smooth={true} spy={true} activeClass="active" className="cursor-pointer">Testimonials</ScrollLink>
            <div className="flex items-center justify-end mt-auto gap-4 px-8">
              <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">Sign In</button>
              <button className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">Sign Up</button>
            </div>
          </nav>
        )}
        <div className="mt-12 lg:mt-14"></div>
      </div>
    </header>
  );
};

export default Header;

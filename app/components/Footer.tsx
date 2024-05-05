import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-footer text-slate-300">
      <section className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
          {/* Logo e informações de contato */}
          <div className="py-6 md:col-span-2 xl:col-span-1">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/footer/logo_footer.svg"
                height={103}
                width={162}
                alt="logo_footer"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <div className="flex items-center mb-4 address">
                <img src="./footer/location.svg" alt="Location" className="w-6 h-6 mr-2" />
                <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
              </div>
              <div className="flex items-center mb-4">
                <img src="./footer/call.svg" alt="Phone" className="w-6 h-6 mr-2" />
                <p>+603 4784 273 12</p>
              </div>
              <div className="flex items-center mt-6">
                <img src="./footer/sms.svg" alt="Email" className="w-6 h-6 mr-2" />
                <p>rentcars@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="py-4 ">
            <h4 className="text-xl text-white font-medium py-2">Our Product</h4>
            <ul role="list">
              <li className="py-2 cursor-pointer">Career</li>
              <li className="py-2 cursor-pointer">Car</li>
              <li className="py-2 cursor-pointer">Packages</li>
              <li className="py-2 cursor-pointer">Features</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-xl text-white font-medium py-2">Resources</h4>
            <ul role="list">
              <li className="py-2 cursor-pointer">Download</li>
              <li className="py-2 cursor-pointer">Help Center</li>
              <li className="py-2 cursor-pointer">Guides</li>
              <li className="py-2 cursor-pointer">Partner Network</li>
              <li className="py-2 cursor-pointer">Cruises</li>
              <li className="py-2 cursor-pointer">Developer</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-xl text-white font-medium py-2">About Rentcars</h4>
            <ul role="list">
              <li className="py-2 cursor-pointer">Why choose us</li>
              <li className="py-2 cursor-pointer">Our Story</li>
              <li className="py-2 cursor-pointer">Investor Relations</li>
              <li className="py-2 cursor-pointer">Press Center</li>
              <li className="py-2 cursor-pointer">Advertise</li>
            </ul>
          </div>
          {/* Redes Sociais */}
          <div className="py-4">
            <h4 className="text-xl text-white font-medium  py-2">Follow Us</h4>
            <div className="flex space-x-4 mt-3">
              <img src="./footer/facebook.svg" className="social-icon cursor-pointer hover:scale-110" alt="Facebook" />
              <img src="./footer/instagram.svg" className="social-icon cursor-pointer hover:scale-110" alt="Instagram" />
              <img src="./footer/youtube.svg" className="social-icon cursor-pointer hover:scale-110" alt="Youtube" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-6 border border-gray-500 mx-auto" style={{ width: "90%" }} />
      <div className="text-center text-gray-400">
        Copyright 2023 - Rentalcars, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 mt-20 py-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        {/* Brand */}
        <h2 className="text-3xl font-bold text-[#f5a623] tracking-wide drop-shadow-[0_0_15px_rgba(245,166,35,0.5)]">
          FitVerse
        </h2>
        <p className="max-w-md text-sm text-gray-400 leading-relaxed">
          Your daily companion for strength, discipline, and motion.  
          Push limits, stay consistent, and build your best version.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl mt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#f5a623] transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#f5a623] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:info@fitverse.com"
            className="text-gray-400 hover:text-[#f5a623] transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

  
      </div>
    </footer>
  );
};

export default Footer;

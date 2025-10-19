import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Search", id: "search" },
    { name: "Exercises", id: "exercises" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent border-b border-orange-500/30 backdrop-blur-md shadow-[0_2px_15px_rgba(249,115,22,0.15)]">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-3">
        {/* 🔥 Logo + FitVerse Branding */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center space-x-3 group"
        >
          <img src={logo} className="h-8 w-auto" alt="FitVerse Logo" />
          <span className="text-lg font-extrabold tracking-tight">
            <span
              className="text-[#f5a623] drop-shadow-[0_0_10px_rgba(245,166,35,0.6)] group-hover:text-[#ffb84a] transition-all"
            >
              Fit
            </span>
            <span className="text-gray-100 group-hover:text-white transition-all">
              Verse
            </span>
          </span>
        </button>

        {/* 🍔 Burger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center w-10 h-10 text-orange-300 rounded-lg md:hidden hover:bg-orange-500/10 focus:ring-2 focus:ring-orange-400/40 transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* 💻 Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="hover:text-[#f5a623] transition-all duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-orange-500/30 shadow-inner animate-fadeIn">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-200">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="block px-3 py-2 hover:text-[#f5a623] transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10 , 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="" className="text-white text-2xl  ">
            Anton Bertrand
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

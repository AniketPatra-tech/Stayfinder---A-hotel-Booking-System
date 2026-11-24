import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const PreloginOwnerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Stayfinder", path: "#why-stayfinder" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold tracking-wide text-white">
            Stay<span className="text-amber-400">finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.path.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-sm text-white/90 hover:text-amber-400 transition duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-white/90 hover:text-amber-400 transition duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/hotelowner/login"
              className="text-sm font-medium text-white hover:text-amber-400 transition"
            >
              Login
            </Link>

            <Link
              to="/hotelowner/signup"
              className="px-6 py-3 bg-amber-500 text-black text-sm font-semibold hover:bg-amber-400 transition duration-300"
            >
              List Your Property
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md rounded-xl px-6 py-6 mb-5">
            <div className="flex flex-col gap-6">

              {navLinks.map((link) => (
                link.path.startsWith("#") ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-amber-400 transition"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-amber-400 transition"
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <hr className="border-gray-700" />

              <Link
                to="/hotelowner/login"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-amber-400 transition"
              >
                Login
              </Link>

              <Link
                to="/hotelowner/signup"
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 text-black text-center font-semibold py-3 hover:bg-amber-400 transition"
              >
                List Your Property
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PreloginOwnerNavbar;

import React from "react";

const PreloginUserNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 md:px-12 lg:px-20 py-6">

      <div className="flex items-center justify-between">

        {/* Brand Logo */}
        <div className="text-2xl font-semibold tracking-tight text-white cursor-pointer">
          stay<span className="font-light">finder</span>
          <span className="text-amber-400">.</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">

          <a href="#home" className="text-sm text-white/90 hover:text-amber-300 transition-colors">
            Home
          </a>

          <a href="#destinations" className="text-sm text-white/90 hover:text-amber-300 transition-colors">
            Destinations
          </a>

          <a href="#about" className="text-sm text-white/90 hover:text-amber-300 transition-colors">
            About Us
          </a>

        </div>

        {/* Authentication */}
        <button className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-stone-900">
          Login / Sign Up
        </button>

      </div>

    </nav>
  );
};

export default PreloginUserNavbar;

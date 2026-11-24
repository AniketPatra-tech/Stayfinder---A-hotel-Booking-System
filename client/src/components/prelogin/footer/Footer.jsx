import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold tracking-wide">
              Stay<span className="text-amber-500">finder</span>
            </Link>

            <p className="text-gray-400 mt-5 leading-7 text-sm max-w-xs">
              Discover exceptional stays, explore new destinations,
              and make every journey memorable with Stayfinder.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-7">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-500 transition">
                <FaInstagram size={19} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-amber-500 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="X" className="text-gray-400 hover:text-amber-500 transition">
                <FaXTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-amber-500 transition">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-amber-500 transition">Destinations</Link></li>
              <li><Link to="/hotels" className="hover:text-amber-500 transition">Discover Stays</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-amber-500 transition">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-amber-500 transition">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-sm text-gray-400 leading-6 mb-5">
              Get travel inspiration, exclusive offers, and updates
              delivered straight to your inbox.
            </p>

            <form className="flex border border-gray-700 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-amber-500 px-4 hover:bg-amber-600 transition text-black"
                aria-label="Subscribe"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-7 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Stayfinder. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-amber-500 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber-500 transition">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-amber-500 transition">
              Cookie Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

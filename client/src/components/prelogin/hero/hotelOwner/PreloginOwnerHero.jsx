
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MoveDown } from "lucide-react";

const PreloginOwnerHero = () => {
    return (
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

            <div className="max-w-4xl mx-auto text-center text-white">

                {/* Small Label */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="w-8 h-px bg-amber-400"></span>
                    <p className="text-amber-400 text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium">
                        A New Chapter in Hospitality
                    </p>
                    <span className="w-8 h-px bg-amber-400"></span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                    Where Hospitality
                    <br />
                    Meets <span className="font-semibold italic text-amber-400">
                        Opportunity.
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-lg mx-auto mt-7 text-sm md:text-base text-white/75 leading-7 font-light">
                    Your property deserves to be discovered.
                    Let's make every stay a remarkable experience.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    <Link
                        to="/hotelowner/"
                        className="group flex items-center gap-3 px-8 py-4 bg-amber-500 text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-amber-400 transition-all duration-300"
                    >
                        Become a Partner

                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>

                    <a
                        href="#why-stayfinder"
                        className="px-8 py-4 border border-white/40 text-white text-xs md:text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                    >
                        Discover More
                    </a>

                </div>

                {/* Bottom Tagline */}
                <div className="mt-16">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50">
                        Your Vision · Our Platform · Endless Possibilities
                    </p>
                </div>

            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-amber-400 transition"
            >
                <span className="text-[9px] uppercase tracking-[0.3em]">
                    Explore
                </span>

                <MoveDown size={17} className="animate-bounce" />
            </a>

        </section>
    );
};

export default PreloginOwnerHero;
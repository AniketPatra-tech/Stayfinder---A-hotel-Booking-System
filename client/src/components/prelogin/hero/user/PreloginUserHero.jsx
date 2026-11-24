import React from "react";

const PreloginUserHero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        {/* Small Label */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-amber-300 md:text-sm">
          Discover the Art of Travelling
        </p>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">

          Your Journey.
          <br />

          <span className="font-semibold italic">
            Your Story.
          </span>

        </h1>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 md:text-lg">
          Escape the ordinary. Discover extraordinary stays,
          explore beautiful destinations and create memories
          that last a lifetime.
        </p>

        {/* CTA Button */}
        <button
          className="group mt-10 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-900 transition-all duration-300 hover:bg-amber-300"
        >
          Begin Your Journey

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
            Scroll to Explore
          </span>

          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-amber-300 to-transparent" />

        </div>

      </div>
    </section>
  );
};

export default PreloginUserHero;

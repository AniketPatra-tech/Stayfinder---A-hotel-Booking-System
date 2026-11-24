
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f7f5f0] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Who We Are
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-stone-900 md:text-6xl">
            Redefining the Way
            <br />
            <span className="font-semibold italic">
              the World Travels.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-stone-600 md:text-base">
            At Stayfinder, we believe that every journey begins
            with finding the right place. We are building a
            hospitality platform that brings discovery,
            comfort and meaningful experiences together.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Image */}
          <div className="group relative h-[350px] overflow-hidden rounded-2xl md:h-[500px]">

            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400"
              alt="Beautiful luxury resort surrounded by nature"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          </div>

          {/* Text */}
          <div className="flex flex-col">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our Story
            </p>

            <h3 className="text-3xl font-light leading-snug text-stone-900 md:text-4xl">
              Every journey deserves
              <span className="font-semibold italic">
                {" "}a beautiful beginning.
              </span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-stone-600 md:text-base">
              Travel is more than reaching a destination.
              It is about discovering new places, experiencing
              different cultures and creating memories that
              stay with us forever.
            </p>

            <p className="mt-5 text-sm leading-8 text-stone-600 md:text-base">
              Stayfinder was created with a simple vision:
              to make discovering and experiencing stays
              more convenient, seamless and memorable.
              We aim to bring people and hospitality together
              through technology and thoughtful experiences.
            </p>

            <p className="mt-5 text-sm leading-8 text-stone-600 md:text-base">
              Every detail matters. Every destination has
              something special to offer. And every journey
              deserves a place worth remembering.
            </p>

          </div>

        </div>

        {/* Vision and Mission */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Vision */}
          <div className="rounded-2xl bg-[#eee9df] p-8 md:p-12">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our Vision
            </p>

            <h3 className="text-2xl font-semibold text-stone-900 md:text-3xl">
              Making every journey extraordinary.
            </h3>

            <p className="mt-5 text-sm leading-8 text-stone-600">
              To build a trusted hospitality ecosystem where
              discovering places and creating unforgettable
              travel experiences becomes effortless.
            </p>

          </div>

          {/* Mission */}
          <div className="rounded-2xl bg-[#eee9df] p-8 md:p-12">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our Mission
            </p>

            <h3 className="text-2xl font-semibold text-stone-900 md:text-3xl">
              Connecting people through hospitality.
            </h3>

            <p className="mt-5 text-sm leading-8 text-stone-600">
              To simplify the way people discover and
              experience stays by combining technology,
              accessibility and a passion for hospitality.
            </p>

          </div>

        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center">

          <h3 className="text-2xl font-light leading-relaxed text-stone-900 md:text-4xl">
            Stay curious.
            <span className="font-semibold italic"> Stay inspired.</span>
            <br />
            <span className="font-semibold">Stayfinder.</span>
          </h3>

        </div>

      </div>
    </section>
  );
};

export default About;

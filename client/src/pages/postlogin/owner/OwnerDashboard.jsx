import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hotel,
  Plus,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Headphones,
  Sparkles,
  Clock3,
  Check,
  UserRound,
} from "lucide-react";

const OwnerDashboard = () => {
  const navigate = useNavigate();

  // Temporary frontend data.
  // Later, fetch properties belonging to the authenticated owner.
  const properties = [];

  const hasProperties = properties.length > 0;

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#30291F]">

      {/* NAVBAR */}
      <nav className="h-[82px] px-6 lg:px-14 flex items-center justify-between bg-[#F8F6F2] border-b border-[#EAE5DC]">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#806448] rounded-xl flex items-center justify-center">
            <Hotel size={21} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-[2px]">
              STAYFINDER
            </h1>
            <p className="text-[9px] tracking-[3px] text-[#9A8D7B]">
              PARTNER PORTAL
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">

          <button className="hidden sm:flex items-center gap-2 text-sm text-[#776C5F] hover:text-[#806448] transition">
            <Headphones size={17} />
            Support
          </button>

          <div className="w-px h-7 bg-[#E5DED3]" />

          <button className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#E9DFD1] flex items-center justify-center">
              <UserRound size={18} className="text-[#806448]" />
            </div>
            <span className="hidden sm:block text-sm font-medium">
              My Account
            </span>
          </button>

        </div>
      </nav>


      {/* MAIN */}
      <main className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-10 lg:py-16">

        {!hasProperties ? (

          <>

            {/* HERO SECTION */}
            <section className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="max-w-xl">

                <div className="flex items-center gap-2 mb-8">
                  <Sparkles size={15} className="text-[#A47E56]" />
                  <span className="text-[11px] tracking-[3px] font-semibold text-[#947956] uppercase">
                    Your journey begins here
                  </span>
                </div>

                <h2 className="text-[42px] sm:text-[55px] lg:text-[66px] leading-[1.12] tracking-[-2.5px] font-medium">
                  A beautiful stay
                  <br />
                  begins with
                  <br />
                  <span className="text-[#A17C55] italic font-serif">
                    a great host.
                  </span>
                </h2>

                <p className="mt-7 text-[#81776A] text-[15px] sm:text-base leading-8 max-w-md">
                  Every memorable journey needs a place to belong.
                  Bring your property to Stayfinder and let travelers
                  discover the experience you've created.
                </p>

                {/* CTA */}
                <div className="mt-9 flex flex-col sm:flex-row gap-4">

                  <button
                    onClick={() => navigate("/owner/list-property")}
                    className="group bg-[#806448] hover:bg-[#6D533B] text-white px-7 py-4 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 shadow-lg shadow-[#806448]/15"
                  >
                    <Plus size={19} />
                    <span className="font-medium text-sm">
                      List Your Property
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>

                  <div className="flex items-center gap-2 px-2 text-sm text-[#8B8174]">
                    <Clock3 size={16} />
                    A simple guided process
                  </div>

                </div>

                {/* TRUST INDICATORS */}
                <div className="mt-12 pt-8 border-t border-[#E6DED2] flex flex-wrap gap-x-8 gap-y-5">

                  <div className="flex items-center gap-2">
                    <ShieldCheck size={19} className="text-[#A17C55]" />
                    <span className="text-xs text-[#756B60]">
                      Secure registration
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={19} className="text-[#A17C55]" />
                    <span className="text-xs text-[#756B60]">
                      Reach more travelers
                    </span>
                  </div>

                </div>

              </div>


              {/* RIGHT IMAGE SECTION */}
              <div className="relative">

                <div className="relative h-[430px] sm:h-[540px] lg:h-[590px] rounded-[28px] overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85"
                    alt="Beautiful luxury hotel interior"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                  <div className="absolute top-7 left-7">
                    <span className="text-white/80 text-[10px] tracking-[3px] uppercase">
                      Stayfinder Hospitality
                    </span>
                  </div>

                  <div className="absolute bottom-9 left-8 right-8">

                    <p className="text-white/70 text-xs tracking-[3px] uppercase mb-3">
                      More than just a stay
                    </p>

                    <h3 className="text-white text-3xl sm:text-4xl font-serif italic leading-tight max-w-md">
                      Make room for
                      <br />
                      unforgettable stories.
                    </h3>

                  </div>

                </div>

                {/* FLOATING CARD */}
                <div className="absolute -bottom-6 -left-3 sm:-left-8 bg-white shadow-xl shadow-black/5 rounded-2xl p-5 sm:p-6 max-w-[235px] border border-[#F0EAE1]">

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#F3EDE4] rounded-xl flex items-center justify-center">
                      <Hotel size={18} className="text-[#806448]" />
                    </div>
                    <span className="text-xs text-[#8B8174]">
                      Your next chapter
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#30291F]">
                    Starts with one listing.
                  </p>

                  <p className="text-xs text-[#968B7E] mt-1 leading-5">
                    Your property deserves to be discovered.
                  </p>

                </div>

              </div>

            </section>


            {/* BOTTOM BENEFITS */}
            <section className="mt-24 lg:mt-32">

              <div className="text-center mb-12">
                <p className="text-[10px] tracking-[3px] uppercase text-[#A17C55] font-semibold mb-4">
                  The Stayfinder Advantage
                </p>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#30291F]">
                  Hosting, made more meaningful.
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">

                <div className="border-t border-[#DDD3C5] pt-7">
                  <span className="text-[#A17C55] font-serif text-2xl">
                    01
                  </span>
                  <h4 className="text-lg font-semibold mt-5 mb-3">
                    Your property, your story.
                  </h4>
                  <p className="text-sm leading-7 text-[#857A6D]">
                    Showcase your accommodation, facilities and
                    unique experiences in your own way.
                  </p>
                </div>

                <div className="border-t border-[#DDD3C5] pt-7">
                  <span className="text-[#A17C55] font-serif text-2xl">
                    02
                  </span>
                  <h4 className="text-lg font-semibold mt-5 mb-3">
                    Reach the right travelers.
                  </h4>
                  <p className="text-sm leading-7 text-[#857A6D]">
                    Help guests discover your property through
                    location-based search and discovery.
                  </p>
                </div>

                <div className="border-t border-[#DDD3C5] pt-7">
                  <span className="text-[#A17C55] font-serif text-2xl">
                    03
                  </span>
                  <h4 className="text-lg font-semibold mt-5 mb-3">
                    Everything in one place.
                  </h4>
                  <p className="text-sm leading-7 text-[#857A6D]">
                    Manage reservations, availability, earnings
                    and property information from one dashboard.
                  </p>
                </div>

              </div>

            </section>

          </>

        ) : (

          /* EXISTING OWNER DASHBOARD */
          <div>
            <h2 className="text-3xl font-semibold">
              Welcome back!
            </h2>

            <p className="text-gray-500 mt-3">
              Your property dashboard will appear here.
            </p>
          </div>

        )}

      </main>


      {/* FOOTER */}
      <footer className="mt-20 bg-[#28231E] text-white px-6 lg:px-14 py-10">

        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between gap-6">

          <div>
            <h3 className="font-bold tracking-[3px] text-lg">
              STAYFINDER
            </h3>
            <p className="text-xs text-white/50 mt-2">
              Creating places for beautiful journeys.
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-white/60">
            <span>Partner Support</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>

        </div>

        <div className="max-w-[1440px] mx-auto border-t border-white/10 mt-8 pt-6">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Stayfinder. All rights reserved.
          </p>
        </div>

      </footer>

    </div>
  );
};

export default OwnerDashboard;

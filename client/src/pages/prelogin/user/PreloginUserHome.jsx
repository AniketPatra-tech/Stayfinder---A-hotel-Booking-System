import React from "react";

// Components
import PreloginUserNavbar from "../../../components/prelogin/navbar/user/PreloginUserNavbar";
import PreloginUserHero from "../../../components/prelogin/hero/user/PreloginUserHero";
import About from "../../../components/prelogin/about/About";
import Footer from "../../../components/prelogin/footer/Footer";

// Assets
import heroVideo from "../../../assets/videos/preloginvideoUserHome.mp4";

const PreloginUserHome = () => {
  return (
    <main className="w-full bg-stone-950">

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen min-h-[600px] w-full overflow-hidden"
      >

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

        {/* Navbar */}
        <PreloginUserNavbar />

        {/* Hero Content */}
        <PreloginUserHero />

      </section>

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer/>

    </main>
  );
};

export default PreloginUserHome;

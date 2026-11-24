
import React from "react";

import PreloginOwnerNavbar from "../../../components/prelogin/navbar/hotelowner/PreloginOwnerNavbar";
import PreloginOwnerHero from "../../../components/prelogin/hero/hotelowner/PreloginOwnerHero";

import heroVideo from "../../../assets/videos/preloginvideoOwnerHome.mp4";

const PreloginOwnerHome = () => {
    return (
        <main className="w-full">

            {/* Hero Section with Background Video */}
            <section className="relative min-h-screen w-full overflow-hidden bg-black">

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
                <div className="absolute inset-0 bg-black/40" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                {/* Navbar */}
                <PreloginOwnerNavbar />

                {/* Hero Content */}
                <PreloginOwnerHero />

            </section>

            {/* About Section */}
            <section id="about">
                {/* Common Stayfinder About component */}
            </section>

            {/* Why Stayfinder Section */}
            <section id="why-stayfinder">
                {/* Hotel owner benefits */}
            </section>

            {/* Common Footer */}
            {/* Shared Footer component */}

        </main>
    );
};

export default PreloginOwnerHome;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

export default function PortfolioPage() {
  const metrics = [
    { number: "400", label: "Real Estate Experts" },
    { number: "18+", label: "Languages Spoken" },
    { number: "7+", label: "Offices Worldwide" },
    { number: "22B AED", label: "Assets Under Development" },
  ];

  const projects = [
    {
      image: "/images/project1.jpg",
      title: "Skyline Tower",
      location: "Dubai Marina, UAE",
      desc: "A landmark of sophistication, Skyline Tower redefines urban luxury with sleek architecture and unmatched waterfront views.",
    },
    {
      image: "/images/project2.jpg",
      title: "The Royal Dunes Villas",
      location: "Ras Al Khaimah, UAE",
      desc: "A premium collection of beachfront villas combining modern design and timeless Arabian elegance, built for serene living.",
    },
    {
      image: "/images/project3.jpg",
      title: "BNW Business Bay Residences",
      location: "Downtown Dubai, UAE",
      desc: "High-rise residences designed for professionals seeking luxury, convenience, and skyline views in the heart of Dubai.",
    },
  ];

  // 📜 Scroll Down Function
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/portfolio-bg.jpg"
          alt="BNW Developments Portfolio"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] italic text-lg md:text-xl mb-4 tracking-wide"
          >
            Crafting Excellence. Shaping Skylines.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-playfair text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6"
          >
            Our Portfolio of <br />
            <span className="text-[#E0B973]">Visionary Developments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From luxurious high-rises to serene beachfront villas — explore the
            defining projects that set new standards of design, innovation, and
            craftsmanship in the UAE.
          </motion.p>
        </div>

        {/* Animated Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 cursor-pointer z-10"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* 🏗 INTRO TEXT */}
      <section
        id="intro-section"
        className="pt-4 pb-20 px-6 lg:px-20 text-justify max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed tracking-wide"
        >
          At{" "}
          <span className="text-[#E0B973] font-medium">GAG Developments</span>
          , we transform visionary concepts into exceptional built environments.
          With a strong commitment to innovation, precision, and excellence, we
          deliver high-quality real estate, construction, and interior solutions
          that set new benchmarks in the industry. Our portfolio reflects a
          dedication to superior design, engineering expertise, and seamless
          project execution across India and the Middle East.
          <br />
          <br />
          In addition to our development and construction capabilities, we offer
          strategic advisory services to help clients plan, optimize, and
          enhance the value of their real estate investments. Partner with GAG
          Developments to experience unmatched quality, integrated solutions,
          and a future-focused approach to modern living and commercial spaces.
        </motion.p>
      </section>

      {/* 📊 METRICS SECTION */}
      <section className="py-20 bg-[#0A0A0A] text-white cursor-pointer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center md:text-left px-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative flex flex-col items-center md:items-start"
            >
              <h3 className="font-playfair text-[#E0B973] text-5xl md:text-6xl font-semibold mb-2 tracking-tight">
                {metric.number}
              </h3>
              <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mb-3 opacity-70" />
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em]">
                {metric.label}
              </p>
              {index !== metrics.length - 1 && (
                <div className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2 w-px h-12 bg-[#2a2a2a]" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 mx-auto w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973]/80 to-transparent opacity-60" />
      </section>

      {/* 🏢 PROJECTS SECTION */}
      <section className="py-20 px-6 lg:px-20 max-w-6xl mx-auto cursor-pointer">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-[#E0B973] text-3xl font-semibold uppercase text-center mb-12"
        >
          Featured Developments
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full overflow-hidden rounded-2xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="object-cover w-full h-[450px] hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="mt-8 max-w-3xl">
                <h3 className="font-playfair text-2xl text-[#E0B973] font-semibold mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="text-gray-500 italic mb-3">{project.location}</p>
                <p className="text-gray-300 leading-relaxed text-base text-justify">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

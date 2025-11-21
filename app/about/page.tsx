"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  const metrics = [
    { number: "1000+", label: "Clients" },
    { number: "1500+", label: "Completed Projects" },
    { number: "25+", label: "Ongoing Projects" },
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/bg1.jpg"
          alt="About Global Architizer Group"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-[#E0B973] mb-6 uppercase tracking-wide">
            About Global Architizer Group
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light text-justify"
          >
            Redefining luxury through timeless architecture, innovative design,
            and master craftsmanship — our legacy lies in every detail we
            create, every skyline we shape.
          </motion.p>
        </motion.div>

        {/* ⬇️ Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </section>

      {/* 🏛 INTRODUCTION */}
      <section className="py-24 px-6 lg:px-20 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8 text-gray-300 text-base md:text-lg leading-relaxed font-light text-justify">
            <p>
              At{" "}
              <span className="text-[#E0B973] font-medium">
                Global Architizer Group
              </span>
              , we believe architecture is not just about structures — it’s
              about stories, emotions, and legacies. With an in-house team of
              architects, interior designers, and engineers, we craft spaces
              that are both functional and emotionally resonant.
            </p>

            <p>
              From conceptualization to execution, every project is guided by a
              commitment to precision and purpose. Our integrated approach
              ensures seamless collaboration between design and construction,
              delivering exceptional results that exceed expectations.
            </p>

            <p>
              Headquartered in Kolkata,{" "}
              <span className="text-[#E0B973] font-medium">GAG</span> has
              expanded its footprint across India, setting new benchmarks in
              luxury residential, hospitality, and commercial spaces. Each
              creation is a testament to our pursuit of excellence, innovation,
              and trust.
            </p>

            <p>
              Our mission is simple yet powerful — to make world-class design
              accessible, efficient, and timeless. By merging advanced
              technology with creative brilliance, we bring visions to life that
              inspire generations.
            </p>
          </div>

          {/* 🧾 Download PDF */}
          <motion.a
            href="/files/company-profile.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px #E0B973",
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 mt-12 px-8 py-3 border border-[#E0B973] text-[#E0B973] rounded-full text-sm uppercase tracking-widest hover:bg-[#E0B973] hover:text-black transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Company Profile
          </motion.a>
        </motion.div>
      </section>

      {/* 📊 METRICS */}
      <section className="relative py-24 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E0B973]/5 to-transparent opacity-70 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-12 px-6 text-center"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative flex flex-col items-center justify-center"
            >
              <h3 className="font-playfair text-[#E0B973] text-6xl md:text-7xl font-semibold drop-shadow-[0_0_10px_rgba(224,185,115,0.3)]">
                {metric.number}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 👥 LEADERSHIP */}
      <section className="py-24 px-0 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT — IMAGE FULL HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[450px] lg:h-[600px]"
          >
            <Image
              src="/images/hero-bg.jpg" 
              alt="About GAG"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT — TEXT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#0A0A0A] px-8 lg:px-16 py-12 flex flex-col justify-center"
          >
            <h2 className="text-[#E0B973] font-playfair text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">
              Welcome to Global Architizer Group
            </h2>

            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light text-justify">
              <p>
                In 2015, we envisioned a world shaped by creativity, precision,
                endurance and craftsmanship. Today, this stands as the
                cornerstone of our design philosophy and our mission to
                innovate.
              </p>

              <p>
                With expanding outreach across India and the Middle East, GAG
                has shaped luxury architectural experiences that merge digital
                precision with real-world excellence.
              </p>

              <p>
                Driven by creativity, persistence and performance, we lead with
                unmatched expertise in architecture, interior design,
                engineering and turnkey project solutions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="/files/company-profile.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 border border-[#E0B973] text-[#E0B973] rounded-full uppercase text-sm tracking-widest hover:bg-[#E0B973] hover:text-black transition-all"
              >
                <Download className="w-5 h-5" />
                Download Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

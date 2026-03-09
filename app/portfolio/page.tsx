"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

type Project = {
  _id: string;
  title: string;
  location: string;
  desc: string;
  image: string;
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* HERO SECTION */}

      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/portfolio-bg.jpg"
          alt="GAG Developments Portfolio"
          fill
          className="object-cover opacity-80"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] italic text-xl md:text-lg mb-4 tracking-wide"
          >
            Crafting Excellence. Shaping Skylines.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-playfair text-4xl md:text-5xl font-semibold uppercase leading-tight mb-6"
          >
            Our Portfolio of <br />
            <span className="text-[#E0B973]">Visionary Developments</span>
          </motion.h1>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 cursor-pointer z-10"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10" />

          <div className="w-8 h-px bg-linear-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70" />
        </motion.div>
      </section>

      {/* INTRO SECTION */}

      <section
        id="intro-section"
        className="pt-4 pb-20 px-6 lg:px-20 text-justify max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-[17px] leading-relaxed tracking-wide"
        >
          At{" "}
          <span className="text-[#E0B973] font-medium">GAG Developments</span>
          , we transform visionary concepts into exceptional built environments.
          With a strong commitment to innovation, precision, and excellence, we
          deliver high-quality real estate, construction, and interior solutions
          that set new benchmarks in the industry across India.
          <br />
          <br />
          In addition to our development and construction capabilities, we offer
          strategic advisory services to help clients plan, optimize, and
          enhance the value of their real estate investments.
        </motion.p>

        <motion.a
          href="/files/GAG Profile.pdf"
          download
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 20px rgba(224,185,115,0.45)",
          }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-10 px-10 py-3 bg-black border border-[#E0B973] text-[#E0B973] rounded-full uppercase text-sm tracking-widest shadow-xl hover:bg-[#E0B973] hover:text-black transition-all flex items-center gap-3 w-fit"
        >
          <Download className="w-5 h-5" />
          Download Company Profile
        </motion.a>
      </section>

      {/* PROJECTS SECTION */}

      <section className="mb-20 mt-5 px-6 lg:px-20 max-w-6xl mx-auto cursor-pointer">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-[#E0B973] text-5xl font-semibold uppercase text-center mb-12"
        >
          Featured Developments
        </motion.h2>

        {loading && (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project._id}
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
                  className="object-cover w-full h-[450px]"
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

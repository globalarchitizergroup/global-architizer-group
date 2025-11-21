"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const logos = [
    "/clientsLogo/Picture1.png",
    "/clientsLogo/Picture2.png",
    "/clientsLogo/Picture3.png",
    "/clientsLogo/Picture4.png",
    "/clientsLogo/Picture5.jpg",
    "/clientsLogo/Picture6.jpg",
    "/clientsLogo/Picture7.png",
    "/clientsLogo/Picture8.png",
    "/clientsLogo/Picture9.png",
    "/clientsLogo/Picture10.jpg",
    "/clientsLogo/Picture11.jpg",
    "/clientsLogo/Picture12.png",
    "/clientsLogo/Picture13.png",
    "/clientsLogo/Picture14.jpg",
    "/clientsLogo/Picture15.jpg",
    "/clientsLogo/Picture16.png",
    "/clientsLogo/Picture17.jpg",
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <section className="w-full py-5 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#E0B973] text-base md:text-lg tracking-widest mb-2 uppercase text-center"
        >
          Clients
        </motion.p>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center text-[#E0B973] mb-4 uppercase"
        >
          Our Clients
        </motion.h2>

        {/* DIVIDER */}
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto opacity-60 mb-10" />

        {/* UPDATED DESCRIPTION TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed text-justify mb-12"
        >
          Our clients are{" "}
          <span className="text-[#E0B973] font-semibold">
            key to our success
          </span>{" "}
          and
          <span className="text-[#E0B973] font-semibold"> growth</span>. We
          collaborate with leading organizations in the
          <span className="text-[#E0B973] font-semibold">
            {" "}
            infrastructure, engineering, and real estate sectors
          </span>
          .
          <br />
          <br />
          We provide{" "}
          <span className="text-[#E0B973] font-semibold">
            customized solutions
          </span>{" "}
          and are committed to{" "}
          <span className="text-[#E0B973] font-semibold">
            innovation, high standards, integrity
          </span>
          , and{" "}
          <span className="text-[#E0B973] font-semibold">
            long-term partnerships
          </span>
          .
        </motion.p>

        {/* AUTO SCROLL CAROUSEL */}
        <div className="relative w-full overflow-hidden mb-4">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {loopLogos.map((logo, i) => (
              <div
                key={i}
                className="min-w-[150px] h-[120px] bg-[#121212] border border-[#2a2a2a] hover:border-[#E0B973] rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={120}
                  height={80}
                  className="object-contain p-3"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

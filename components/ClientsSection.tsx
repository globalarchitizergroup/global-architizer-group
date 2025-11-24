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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loopLogos = [...logos, ...logos];

  return (
    <section className="relative w-full mt-5 mb-10 bg-[#0A0A0A] text-white overflow-hidden">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/clients-bg.png"
          alt="clients background"
          fill
          className="object-cover opacity-100"
        />
        {/* Optional darker overlay if needed */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        {/* HEADING LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#E0B973]">
            Our Clients
          </h2>

          {/* GOLD RAY LINE */}
          <div className="h-0.5 bg-linear-to-r from-[#E0B973] via-[#E0B973] to-transparent w-[260px] mt-3 mb-6" />
        </motion.div>

        {/* ONE PARAGRAPH TEXT - SMALLER - NO HIGHLIGHTING */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-gray-400 text-sm md:text-base leading-relaxed text-justify mb-14"
        >
          Our clients are key to our success and growth. We collaborate with
          leading organizations in the infrastructure, engineering, and real
          estate sectors. We provide customized solutions and are committed to
          innovation, high standards, integrity, and long-term partnerships.
        </motion.p>

        {/* AUTO SCROLL CAROUSEL FIXED */}
        <div className="relative w-full overflow-hidden mb-4">
          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex gap-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-[140px] h-20 flex items-center justify-center bg-[#121212]/70 rounded-xl"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* duplicate row for infinite loop */}
            <motion.div
              className="flex gap-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => (
                <div
                  key={`dupe-${i}`}
                  className="w-[140px] h-20 flex items-center justify-center bg-[#121212]/70 rounded-xl"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

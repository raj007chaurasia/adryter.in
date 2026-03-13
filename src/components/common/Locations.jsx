"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LOCATIONS_DATA = [
  {
    country: "United States",
    address: "16 Cove Road, Mount Arlington, NJ 07856",
  },
  {
    country: "Australia",
    address: "155 Bennett Rd, St Clair NSW 2759",
  },
  {
    country: "South Africa",
    address: "55 Mons Rd, Bellevue East, Johannesburg, 2198",
  },
  {
    country: "Singapore",
    address: "6 Raffles Blvd, Marina Square",
  },
  {
    country: "Italy",
    address: "Via Bari, 9, 03043 Cassino, FR",
  },
  {
    country: "Dubai",
    address: "AlFattan Downtown - 32d St - Al Satwa",
  },
  {
    country: "Cyprus",
    address: "Estias 5, Strovolos 2001",
  },
  {
    country: "Bangladesh",
    address: "Ventura Iconia, Plot 37 Road No. 11, Banani, Dhaka 1213",
  },
];

export default function Locations() {
  return (
    <section className="relative w-full min-h-[110vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/footer_globe.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-[#030303] via-transparent to-[#030303]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#030303] via-transparent to-[#030303]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-[#660066] mb-4 block"
          >
            Worldwide
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Global <span className="italic font-serif font-light text-white/90">Presence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {LOCATIONS_DATA.map((loc, idx) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Background with Glassmorphism */}
              <div className="relative p-8 rounded-[24px] bg-white/3 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/7 group-hover:border-white/20 h-full flex flex-col items-center text-center">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-[#660066]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h4 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                  {loc.country}
                </h4>
                <p className="relative z-10 text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                  {loc.address}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#660066]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

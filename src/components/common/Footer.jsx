"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  {
    title: "Important Links",
    links: ["Contact Us", "About Us", "Products", "Industry", "Blogs"],
  },
  {
    title: "Services",
    links: ["UI/UX Design", "Web Design", "Logo & Branding", "Webflow Design", "Framer Design"],
  },
  {
    title: "Specialized Industry",
    links: ["Fintech Industry", "Healthcare & Fitness Industry", "Edtech Industry", "Cybersecurity Industry", "Company Deck"],
  },
  {
    title: "Compare",
    links: ["Vs Agencies", "Vs Freelancers", "Vs Inhouse"],
  },
];

const PARTNERS = [
  { name: "Framer", role: "Professional Partner" },
  { name: "Webflow", role: "Professional Partner" },
  { name: "Behance", role: "Top Team On Behance" },
  { name: "Dribbble", role: "Top Team On Dribbble" },
  { name: "Clutch", role: "Reviewed On", stars: 5 },
  { name: "Google", role: "Reviewed On", stars: 5 },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] overflow-hidden   ">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8  mb-24 justify-center items-center w-full">
          
          

          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-6 w-full max-w-[200px]">
                <h4 className="text-white font-bold text-lg tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => {
                    const isRouterLink = ["Blogs", "Contact Us", "About Us", "Products"].includes(link);
                    const linkPath = link === "Blogs" ? "/blogs" : link === "Contact Us" ? "/contact" : link === "About Us" ? "/about" : "/products";

                    return (
                      <li key={lIdx}>
                        {isRouterLink ? (
                          <Link
                            to={linkPath}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group w-fit"
                          >
                            <span className="text-sm font-medium">{link}</span>
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group w-fit"
                          >
                            <span className="text-sm font-medium">{link}</span>
                           
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        {/* Top Section: Links Grid end */}
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-12 border-t border-white/5 pt-12">
          {/* X (Twitter) */}
          <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-white/30 shadow-[0_4px_15px_-3px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(255,255,255,0.2)] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad-x" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <path fill="url(#grad-x)" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#00c6ff]/30 shadow-[0_4px_15px_-3px_rgba(0,198,255,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(0,198,255,0.2)] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad-linkedin" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0072ff" />
                  <stop offset="100%" stopColor="#00c6ff" />
                </linearGradient>
              </defs>
              <path fill="url(#grad-linkedin)" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.153 1.459-2.153 2.964v5.701h-3v-11h2.88v1.503h.042c.4-.759 1.379-1.56 2.839-1.56 3.037 0 3.6 2 3.6 4.6v6.458z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#ff0080]/30 shadow-[0_4px_15px_-3px_rgba(255,0,128,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(255,0,128,0.2)] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad-insta" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path fill="url(#grad-insta)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.315.06-2.585.337-3.593 1.345-1.008 1.008-1.285 2.278-1.345 3.593-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.06 1.315.337 2.585 1.345 3.593 1.008 1.008 2.278 1.285 3.593 1.345 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.315-.06 2.585-.337 3.593-1.345 1.008-1.008 1.285-2.278 1.345-3.593.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.315-.337-2.585-1.345-3.593-1.008-1.008-2.278-1.285-3.593-1.345-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#1877f2]/30 shadow-[0_4px_15px_-3px_rgba(24,119,242,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(24,119,242,0.2)] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad-facebook" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1877f2" />
                  <stop offset="100%" stopColor="#00c6ff" />
                </linearGradient>
              </defs>
              <path fill="url(#grad-facebook)" d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14H7v3.54h2.5V24h5V11h3.42l.35-3.54z"/>
            </svg>
          </a>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="lg:pt-4 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-30 border-t border-white/5">
          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
            Terms & Conditions
          </a>
          
          <p className="text-xs text-center font-bold text-gray-600 uppercase tracking-widest">
            © 2026, AdRyter, All Rights Reserved.
          </p>

          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
            Privacy Policy
          </a>
        </div>

        {/* Massive Brand Finish - Layered Styling */}
        <div className="mt-32 md:mt-48 relative flex flex-col items-center justify-center overflow-visible h-[20vh] md:h-[45vh]">
          {/* Top Layer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-1/2 translate-y-[15%] z-20"
          >
            <h2 className="text-[14vw] md:text-[16vw] font-black text-white/60 tracking-[0.05em] md:tracking-widest leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase">
              AdRyter
            </h2>
          </motion.div>

          {/* Horizontal Decorative Line */}
         
          {/* Bottom Layer (Reflection Effect) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 translate-y-[-4%] scale-y-[-1] blur-xs z-10"
          >
            <h2 className="text-[14vw] md:text-[16vw] font-black text-white/20 tracking-[0.05em] md:tracking-widest leading-none select-none bg-linear-to-b from-white/30 to-transparent bg-clip-text uppercase">
              AdRyter
            </h2>
          </motion.div>

          {/* Stronger Bottom Glow Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-linear-to-t from-[#660066]/30 via-transparent to-transparent z-0 pointer-events-none" />
        </div>
      </div>

      {/* Background Decor - Pulsing Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#660066]/20 rounded-full blur-[200px] pointer-events-none opacity-50" />
    </footer>
  );
}

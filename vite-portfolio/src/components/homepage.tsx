"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Star = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z"
      fill="#7CDEBC"
      fillOpacity="0.5"
    />
  </svg>
);

const NavLink = ({
  href,
  children,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  badge?: string;
}) => (
  <a
    href={href}
    className="text-white/90 hover:text-[#7CDEBC] transition-colors flex items-center gap-2 relative px-4 py-2"
  >
    {children}
    {badge && (
      <span className="bg-[#7CDEBC]/20 text-[#7CDEBC] text-sm px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </a>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#2D3A35] flex flex-col items-center relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 z-50"
      >
        <div className="bg-[#1C2422]/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4">
          <NavLink href="#work" badge="7">
            Work
          </NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#play">Play</NavLink>
          <NavLink href="#notes">Notes</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl px-4 text-center relative">
        {/* Decorative stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[20%] left-[15%]"
        >
          <Star />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-[30%] right-[20%]"
        >
          <Star />
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-[#7CDEBC] text-7xl md:text-8xl font-bold leading-tight tracking-tight">
            Hi. I'm William.
            <br />
            <span className="font-serif italic">A Developer.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </motion.p>
        </motion.div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2D3A35]/50 pointer-events-none" />
    </div>
  );
};

export default Homepage;

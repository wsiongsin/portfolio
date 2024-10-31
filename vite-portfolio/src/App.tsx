"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavLink = ({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`font-sans text-white/90 hover:text-[#7CDEBC] transition-colors flex items-center gap-2 relative px-4 py-2 ${
      isActive ? "text-[#7CDEBC]" : ""
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7CDEBC]"
        layoutId="underline"
      />
    )}
  </a>
);

const ProjectCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/10 rounded-lg overflow-hidden shadow-lg"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2 font-sans">
        {title}
      </h3>
      <p className="text-white/80 font-sans">{description}</p>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#2D3A35] flex flex-col items-center">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 z-50"
      >
        <div className="bg-[#1C2422]/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4">
          <NavLink
            href="#homepage"
            isActive={activeSection === "home"}
            onClick={() => scrollToSection("home")}
          >
            Home
          </NavLink>
          <NavLink
            href="#work"
            isActive={activeSection === "work"}
            onClick={() => scrollToSection("work")}
          >
            Work
          </NavLink>
          <NavLink
            href="#about"
            isActive={activeSection === "about"}
            onClick={() => scrollToSection("about")}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            isActive={activeSection === "skills"}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </NavLink>
          <NavLink
            href="#contact"
            isActive={activeSection === "contact"}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </NavLink>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 px-4 text-center min-h-screen flex flex-col justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#7CDEBC] text-7xl font-bold mb-6 font-sans tracking-tight"
        >
          In Progress.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/80 text-xl max-w-2xl mx-auto font-sans"
        >
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </motion.p>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#7CDEBC] text-4xl font-bold mb-12 text-center font-sans"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-featured online store built with Next.js and Stripe integration."
            image="/placeholder.svg?height=300&width=400"
          />
          <ProjectCard
            title="Task Management App"
            description="A React-based productivity tool with real-time updates using Firebase."
            image="/placeholder.svg?height=300&width=400"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A responsive portfolio site showcasing web development projects."
            image="/placeholder.svg?height=300&width=400"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#7CDEBC] text-4xl font-bold mb-8 text-center font-sans"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg space-y-6 font-sans"
        >
          <p>
            I'm a full-stack developer with a passion for creating intuitive and
            efficient web applications. With over 5 years of experience in the
            industry, I've worked on a wide range of projects from small
            business websites to large-scale enterprise applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying outdoor activities
            like hiking and photography.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#7CDEBC] text-4xl font-bold mb-12 text-center font-sans"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {["JavaScript", "React", "Node.js", "Python", "SQL", "GraphQL"].map(
            (skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-4 text-center"
              >
                <h3 className="text-white text-lg font-semibold font-sans">
                  {skill}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#7CDEBC] text-4xl font-bold mb-8 text-center font-sans"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg mb-8 text-center font-sans"
        >
          Interested in working together or have a question? Feel free to reach
          out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="mailto:your.email@example.com"
            className="bg-[#7CDEBC] text-[#2D3A35] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#7CDEBC]/90 transition-colors duration-300 font-sans"
          >
            Send a Message
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1C2422] py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 font-sans">
            &copy; 2023 William Siong. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

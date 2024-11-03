"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogSection from "./components/BlogSection.tsx";
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
  isActive,
  onClick,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  badge?: string;
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
    {badge && (
      <span className="bg-[#7CDEBC]/20 text-[#7CDEBC] text-sm px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
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
  console.log("Portfolio component rendering");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    console.log("useEffect running");
    const handleScroll = () => {
      const sections = ["home", "work", "about", "blog", "contact"];
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
    <ErrorBoundary>
      <div className="min-h-screen bg-[#2D3A35] text-white flex flex-col items-center">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-8 z-50"
        >
          <div className="bg-[#1C2422]/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4">
            <NavLink
              href="#home"
              isActive={activeSection === "home"}
              onClick={() => scrollToSection("home")}
              badge="{ }"
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
              href="#blog"
              isActive={activeSection === "blog"}
              onClick={() => scrollToSection("blog")}
            >
              Blogs
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
          className="min-h-screen w-full flex flex-col items-center justify-center relative px-4"
        >
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

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#7CDEBC] text-7xl md:text-8xl font-bold leading-tight tracking-tight mb-6"
            >
              <span className="font-serif italic">
                Hi, I'm William.
                <br /> A Developer.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              I love crafting and designing new software.
            </motion.p>
          </div>
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
            className="text-white/80 text-lg space-y-8 font-sans"
          >
            <p>
              Hi! I'm a passionate software development student at the
              University of Guelph, set to graduate in April 2025 through the
              co-op program. Coding and designing software has become more than
              just a skill for me—it's my favorite way to create, connect, and
              solve real-world problems. With every project, I aim to bring
              something new and meaningful to the table, whether it's through
              clean, efficient code or innovative, user-centered design. I am a
              full-stack developer with a passion for creating intuitive and
              efficient web applications. With over 2 years of co-op experience
              in the industry, I've worked on a wide range of projects from
              small business websites to large-scale enterprise applications.
            </p>
            <p>
              Balancing academics and hands-on experience has been both
              challenging and rewarding. My co-op placements have allowed me to
              dive deep into the industry, gaining valuable insights and
              practical skills that go beyond the classroom. I'm always eager to
              take on new projects, experiment with ideas, and work with teams
              that share my enthusiasm for tech and innovation.
            </p>
            <p>
              Outside of my academic and coding life, I'm either lifting weights
              at the gym or enjoying time with friends—two things that keep me
              grounded and energized. I was born and raised on the vibrant
              island of Mauritius, where the beach was my playground. Growing up
              by the ocean has instilled in me a lifelong love for exploration
              and resilience, values that I bring into every aspect of my life
              and work.
            </p>
            <p>
              I'm excited to keep pushing boundaries in the tech world and to be
              part of projects that make a difference. Let's connect—I'd love to
              share ideas, collaborate, or chat about what's next in software!
            </p>
          </motion.div>
          <br />
          <br />
          <br />
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#7CDEBC] text-4xl font-bold mb-8 text-center font-sans"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg space-y-6 font-sans"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "RESTful",
                "C",
                "Python",
                "SQL/MySQL",
                "Docker",
                "CodeceptJS",
                "Selenium",
                "Appium",
              ].map((skill, index) => (
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
              ))}
            </div>
          </motion.div>
        </section>

        {/* Blogs Section */}
        <section id="blog" className="py-20 px-4 w-full max-w-4xl">
          <BlogSection />
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
            Interested in working together or have a question? Feel free to
            reach out!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <a
              href="mailto:w.siongsin@gmail.com"
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
    </ErrorBoundary>
  );
}

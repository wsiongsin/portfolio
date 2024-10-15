import React, { useRef, useEffect } from "react";

// A basic component to simulate shader effects using CSS animations
const BackgroundShader = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff", // White background
        zIndex: -1,
      }}
    />
  );
};

// Overlay component with top-left name and top-right navbar
const Overlay = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black", // Black text for contrast on white background
        zIndex: 1,
      }}
    >
      {/* Top-left name */}
      <header
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontFamily: "monospace",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>William Siong_</h1>
      </header>

      {/* Top-right navbar */}
      <nav
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
            gap: "20px",
          }}
        >
          <li>
            <a
              href="#about"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content in the center */}
      <main style={{ textAlign: "center" }}>
        <h2
          style={{
            fontSize: "10rem",
            fontWeight: "bold",
            textAlign: "Center",
            background:
              "linear-gradient(to right, #ff9a9e, #fad0c4 50%, #ff9a9e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientShift 5s infinite",
            marginBottom: 0,
          }}
        >
          Hello.
        </h2>
        <h2
          style={{
            fontSize: "10rem",
            fontWeight: "bold",
            textAlign: "Center",
            background:
              "linear-gradient(to right, #ff9a9e, #fad0c4 50%, #ff9a9e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientShift 5s infinite",
            marginTop: 0,
          }}
        >
          BONJOUR.
        </h2>
      </main>
    </div>
  );
};

// Main component that renders everything
const Portfolio = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <BackgroundShader />
      <Overlay />
    </div>
  );
};

export default function App() {
  return <Portfolio />;
}

"use client";

import React from "react";
import Hero from "./Hero";
// Importe aqui os futuros componentes:
// import About from "./About";
// import Projects from "./Projects";

export default function MainContent() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      {/* Seus futuros componentes entram aqui nativamente na árvore React */}
      {/* <About /> */}
      {/* <Projects /> */}
    </>
  );
}
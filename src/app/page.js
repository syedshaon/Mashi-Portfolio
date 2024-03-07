"use client";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Skills2 from "@/components/Skills2";

import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Stat from "@/components/Stat";

import Testimonials2 from "@/components/Testimonials2";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Experience */}
      <Skills />
      <Skills2 />
      <Experience />

      <Stat />
      <Portfolio />
      <Services />
      <Testimonial />
      <Testimonials2 />

      <Contact />
      <Contact2 />
    </>
  );
}

import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className=" px-6 md:px-12">
        <div className="my-32 opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          <h1
            className="w-4/5 text-5xl md:text-6xl font-bold bg-gradient-to-r dark:text-white text-slate-800 bg-clip-text 
          drop-shadow-[0_0_15px_rgba(213,186,21,0.5)] "
          >
            From Concept to Creation: Lorven AI Powers the Future of
            Storytelling.
          </h1>
          <p
            className="text-xl dark:text-slate-50 text-gray-600 leading-relaxed
          drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mt-8"
          >
            Empowering storytellers with cutting-edge AI tools to generate
            ideas, design plots, and bring their visions to life.
          </p>
          <br />
          <Link
            href={"#contact"}
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold 
          hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

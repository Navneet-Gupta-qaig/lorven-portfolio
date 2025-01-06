import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className=" px-6 md:px-12">
        <div className="space-y-16 opacity-0 animate-[fadeIn_1s_ease-in_forwards] scroll-mt-20">
          <h1
            className="text-7xl font-bold tracking-tight dark:bg-gradient-to-t bg-gradient-to-b from-slate-200 dark:from-white dark:to-purple-400 to-purple-500 bg-clip-text text-transparent 
          drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            About Us
          </h1>

          <h2 className="text-4xl font-bold from-white to-blue-500 dark:bg-gradient-to-l dark:to-yellow-100 bg-clip-text text-transparent bg-gradient-to-bl drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Empowered by Legacy, Fueled by AI
          </h2>

          <div className="prose prose-lg max-w-5xl space-y-8 leading-relaxed prose-invert opacity-90">
            <p className="dark:text-white text-xl">
              Lorven AI is born from a rich legacy of over 50 years of
              experience in the film and entertainment industry.
            </p>
            <p className="textwhite text-xl">
              Our founders, seasoned veterans with a track record of creating
              blockbuster hits, have now joined forces with the power of AI to
              revolutionize storytelling.
            </p>
            <p className="textwhite text-xl">
              We believe that AI has the potential to unlock unparalleled
              creativity and innovation in the entertainment world.
            </p>
          </div>

          <div className="pt-12  flex items-end ">
            <p className="text-lg dark:text-white">
              <Link
                href={"#contact"}
                className="relative bg-gradient-to-r dark:from-white from-red-600/30 to-purple-400  dark:to-purple-400 bg-clip-text text-transparent 
                group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300"
              >
                Join us
              </Link>{" "}
              on this exciting journey as we leverage the power of AI to shape
              the future of entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

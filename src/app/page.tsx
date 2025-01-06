import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import ProductDisplay from "@/components/ProductDisplay";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="fixed inset-0 z-[-1] opacity-80">
        <div className="absolute inset-0 bg-[url('/noise-transparent.png')] " />
        <Image
          src="/RWA-Gradient-Homepage-Top.webp"
          className="absolute -top-[10%] right-0 w-full h-1/2 object-contain mix-blend-screen animate-[spin_300s_infinite_reverse]"
          alt="bg"
          fill
        />
        <Image
          src="/RWA-Gradient-Homepage-Bottom.webp"
          className="absolute -bottom-1/2 -left-[10%] w-full h-full object-cover mix-blend-screen animate-[spin_400s_infinite]"
          alt="bg"
          fill
        />

        <Image
          src="/RWA-Gradient-Homepage-Middle.webp"
          className="absolute top-[10%] left-0 w-full h-full object-cover mix-blend-screen animate-[spin_100s_infinite_reverse]"
          alt="bg"
          fill
        />
      </div>
      <main className=" max-w-7xl m-auto">
        <Hero />
        <AboutSection />
        <ProductDisplay />
        <ContactUs/>
      </main>
    </div>
  );
}

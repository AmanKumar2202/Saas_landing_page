"use client";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Demo } from "@/components/sections/Demo";
import { ComponentShowcase } from "@/components/sections/ComponentShowcase";
import { AdvancedPricingCalculator } from "@/components/sections/AdvancedPricingCalculator";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <AdvancedPricingCalculator />
      <Demo />
      <Testimonials />
      <FAQ />
      <Blog />
      <ComponentShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
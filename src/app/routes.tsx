import React from "react";
import { createBrowserRouter } from "react-router";
import { Hero } from "./components/Hero";
import { SummarySection } from "./components/SummarySection";
import { TransformationSection } from "./components/TransformationSection";
import { ProductsSection } from "./components/ProductsSection";
import { SocialSection } from "./components/SocialSection";
import { Footer } from "./components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-neutral-100 flex flex-col">
      <Hero />
      <SummarySection />
      <TransformationSection />
      <ProductsSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
]);

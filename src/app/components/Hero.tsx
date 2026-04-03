import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { LogoIichnitsa, LogoWMTAI } from "./Logos";
import { motion as Motion, AnimatePresence } from "motion/react";

// Hero Images
import hero1 from "@/assets/hero/фото hero 1.png";
import hero2 from "@/assets/hero/фото hero 2.png";
import hero3 from "@/assets/hero/фото hero 3.png";

const HERO_IMAGES = [hero1, hero2, hero3];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const isAbsent = status === "absent";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden bg-zinc-950">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentIndex]}
              alt={`ИИЧНИЦА SHOW Event ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </Motion.div>
        </AnimatePresence>
        
        {/* Overlay & Gradients */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
      </div>


      {/* Header */}
      <Motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto w-full"
      >
        <LogoIichnitsa />
        <LogoWMTAI />
      </Motion.header>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-8 mb-12 md:mt-12 md:mb-24">
        <div className="flex flex-col items-center">
          <Motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[40px] sm:text-5xl md:text-[100px] lg:text-[120px] leading-[1.1] font-medium tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-4"
          >
            <span className="text-[#FF5331]">ИИЧНИЦА</span>
            <span className="text-white">SHOW</span>
          </Motion.h1>
          <Motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-[80px] lg:text-[100px] leading-tight text-white font-medium tracking-tight mt-2 md:mt-4"
          >
            Как это было
          </Motion.h2>
        </div>
        
        <Motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-white/80 leading-relaxed font-medium max-w-[950px]"
        >
          {isAbsent ? (
            "Жаль, что вы не смогли быть с нами на ИИчнице. Чтобы вы ничего не потеряли, мы собрали на одной странице саммари выступлений, фотографии и основные итоги вечера."
          ) : (
            "Спасибо, что посетили наше мероприятие ИИЧНИЦА SHOW! Надеемся, что наш уникальный формат и энергетика WMT AI зарядили вас на ИИ-трансформацию, ведь это наша главная задача!"
          )}
        </Motion.p>

        <Motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a 
            href="https://surkoph.com/disk/31-03-2026-wmt-ai-ttc047"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5331] hover:bg-[#e64627] text-white font-medium text-base sm:text-lg md:text-xl px-6 py-4 md:px-8 md:py-5 rounded-2xl transition-colors shrink-0 flex items-center justify-center decoration-0"
          >
            Фотоотчет
          </a>

          <button 
            onClick={() => {
              document.getElementById('summary-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-base sm:text-lg md:text-xl px-6 py-4 md:px-8 md:py-5 rounded-2xl transition-colors shrink-0"
          >
            Саммари выступлений
          </button>
        </Motion.div>
      </div>
    </section>
  );
}

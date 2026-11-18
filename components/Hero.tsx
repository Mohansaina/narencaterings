"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { t, lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden"
    >
      {/* Background Image with warm dark gradient overlay */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1800&auto=format&fit=crop"
          alt="Traditional South Indian Wedding Feast on Banana Leaf"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradients to keep text crisp and high-contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/80" />
        <div className="absolute inset-0 bg-[#380814]/30 mix-blend-multiply" />
      </div>

      {/* Decorative Golden Line Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-2 sm:mt-8">
        
        {/* Welcome Tag with dot (Image 2 style) */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/50 text-[#F6E6AB] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] flex-shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">{t("hero.welcomeTag")}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
        </div>

        {/* Telugu Punchline Badge from Instagram Bio */}
        <div className="mb-3 sm:mb-4 inline-block bg-gradient-to-r from-[#8B1834]/90 via-[#540D1E]/95 to-[#8B1834]/90 px-4 sm:px-6 py-2 rounded-xl sm:rounded-2xl border border-[#D4AF37]/60 shadow-lg backdrop-blur-md max-w-full">
          <p className="font-serif text-xs sm:text-base md:text-lg text-amber-200 font-medium tracking-wide leading-snug">
            &ldquo;{t("hero.teluguBio")}&rdquo;
          </p>
        </div>

        {/* Big Greeting: Namaste! (Matching Image 2) */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-md">
          <span className="gold-text-gradient block mb-1">
            {t("hero.greeting")}
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl font-normal text-stone-100 leading-snug">
            {t("hero.subGreeting")}
          </span>
        </h1>

        {/* Description (Matching Image 2 style) */}
        <p className="max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-stone-200 font-light leading-relaxed mb-6 sm:mb-8 px-2">
          {t("hero.description")}
        </p>

        {/* Buttons (Matching Reference Image 2: Explore -> and Contact ->) */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-12">
          {/* Explore button */}
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#72152B] border border-white/80 backdrop-blur-md font-bold text-xs sm:text-base transition-all duration-300 shadow-md"
          >
            <span>{t("hero.exploreBtn")}</span>
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#72152B] flex items-center justify-center group-hover:bg-[#72152B] group-hover:text-white transition-colors">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </a>

          {/* Contact / Book button */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full bg-[#72152B] hover:bg-[#8B1834] text-white border-2 border-[#D4AF37] font-bold text-xs sm:text-base transition-all duration-300 shadow-xl"
          >
            <span>{t("hero.contactBtn")}</span>
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#D4AF37] text-[#141416] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 font-bold">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </button>
        </div>

        {/* Quick Highlights Bar (Mobile 2x2 grid, Desktop 1x4) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto pt-4 sm:pt-6 border-t border-white/20 text-[11px] sm:text-sm">
          <div className="flex items-center justify-center gap-1.5 text-stone-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
            <span className="truncate">{t("hero.highlights.pureGhee")}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-stone-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
            <span className="truncate">{t("hero.highlights.aratiAaku")}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-stone-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
            <span className="truncate">{t("hero.highlights.liveCounters")}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-stone-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
            <span className="truncate">{t("hero.highlights.uniformStaff")}</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:text-amber-300 transition-colors animate-bounce"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </section>
  );
}

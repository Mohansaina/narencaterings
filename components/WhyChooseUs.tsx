"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("whyUs.card1Title"),
      telugu: t("whyUs.card1Telugu"),
      description: t("whyUs.card1Desc"),
      details: t("whyUs.card1Detail"),
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C59B27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          <circle cx="6" cy="19" r="1" />
        </svg>
      ),
    },
    {
      title: t("whyUs.card2Title"),
      telugu: t("whyUs.card2Telugu"),
      description: t("whyUs.card2Desc"),
      details: t("whyUs.card2Detail"),
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C59B27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12l-4-4-4 4" />
          <path d="M12 16V8" />
        </svg>
      ),
    },
    {
      title: t("whyUs.card3Title"),
      telugu: t("whyUs.card3Telugu"),
      description: t("whyUs.card3Desc"),
      details: t("whyUs.card3Detail"),
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C59B27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          <path d="m9 8 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t("whyUs.card4Title"),
      telugu: t("whyUs.card4Telugu"),
      description: t("whyUs.card4Desc"),
      details: t("whyUs.card4Detail"),
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C59B27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="5" cy="12" r="2" />
          <path d="M12 7v2" />
          <path d="M17 12h-2" />
          <path d="M12 15v2" />
          <path d="M7 12h2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Background Chef Line-Art Silhouette */}
      <div className="absolute left-4 bottom-0 opacity-10 pointer-events-none hidden lg:block">
        <svg width="320" height="400" viewBox="0 0 200 240" fill="none" stroke="#72152B" strokeWidth="1.5">
          <path d="M70 70 C70 40 130 40 130 70 C145 70 155 85 145 100 C155 115 135 130 120 130 L80 130 C65 130 45 115 55 100 C45 85 55 70 70 70 Z" />
          <path d="M75 130 L75 160 C75 180 125 180 125 160 L125 130" />
          <path d="M60 160 C40 190 30 240 30 240 L170 240 C170 240 160 190 140 160 Z" />
          <path d="M90 170 L90 240" />
          <path d="M110 170 L110 240" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Big Centered Headline (Image 5 style) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight">
            {t("whyUs.heading")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 sm:mt-4" />
          <p className="mt-3 text-stone-600 text-xs sm:text-base">
            {t("whyUs.subheading")}
          </p>
        </div>

        {/* 4 Cards with Signature Golden-Amber Border (Image 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-7 text-center relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group shadow-md"
              style={{
                border: "3px solid #E5A93C",
                boxShadow: "0 8px 20px -4px rgba(229, 169, 60, 0.18)",
              }}
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-50/80 border border-amber-200/60 mx-auto flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Telugu Tag */}
                <span className="text-[11px] text-[#72152B] font-semibold tracking-wide block mb-1">
                  {item.telugu}
                </span>

                {/* Card Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2 group-hover:text-[#72152B] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Expanded Details */}
                <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed border-t border-stone-100 pt-2.5">
                  {item.details}
                </p>
              </div>

              {/* Bottom decorative gold accent line */}
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B1834] mx-auto rounded-full group-hover:w-14 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Hygiene & Quality Badges (Mobile friendly wrap) */}
        <div className="mt-10 sm:mt-16 bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-stone-700 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">{t("whyUs.badge1")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">{t("whyUs.badge2")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">{t("whyUs.badge3")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">{t("whyUs.badge4")}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

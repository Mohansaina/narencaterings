"use client";

import Image from "next/image";
import { Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101012] text-stone-300 relative border-t-2 border-[#D4AF37]/40 pt-12 sm:pt-16 pb-8 overflow-hidden">
      {/* Top golden decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-black flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Naren Caterings Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white block leading-tight">
                  NAREN <span className="text-[#C59B27] font-normal">CATERINGS</span>
                </span>
                <span className="text-[10px] sm:text-xs text-amber-200/80 tracking-widest uppercase">
                  {t("footer.tagline")}
                </span>
              </div>
            </div>

            {/* Telugu Tagline from Instagram Bio */}
            <div className="bg-stone-900/90 border border-stone-800 p-3 rounded-xl text-xs text-amber-200 font-serif leading-relaxed">
              &ldquo;{t("footer.bioQuote")}&rdquo;
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {t("footer.desc")}
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/narencaterings/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-400 hover:text-white hover:bg-[#833ab4] transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:9133774043"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-400 hover:text-white hover:bg-[#72152B] transition-colors"
                title="Call 9133774043"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-serif font-bold text-white text-sm sm:text-base border-b border-[#D4AF37]/30 pb-1.5">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">{t("nav.home")}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">{t("nav.about")}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">{t("nav.services")}</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4AF37] transition-colors">{t("nav.menu")}</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">{t("nav.whyUs")}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">{t("nav.gallery")}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">{t("nav.contact")}</a>
              </li>
            </ul>
          </div>

          {/* Menus / Specialties */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-serif font-bold text-white text-sm sm:text-base border-b border-[#D4AF37]/30 pb-1.5">
              {t("footer.specialties")}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-400">
              <li>{lang === "te" ? "అరటి ఆకు విందు (32+ రకాలు)" : "Arati Aaku Vindu (32+ items)"}</li>
              <li>{lang === "te" ? "బెల్లం పూతరేకులు" : "Bellam Pootharekulu"}</li>
              <li>{lang === "te" ? "గోంగూర మటన్ కర్రీ" : "Gongura Mutton Curry"}</li>
              <li>{lang === "te" ? "నాటుకోడి పులుసు & గారెలు" : "Natukodi Pulusu & Garelu"}</li>
              <li>{lang === "te" ? "నెల్లూరు రొయ్యల ఇగురు" : "Nellore Royyala Iguru"}</li>
              <li>{lang === "te" ? "వైజాగ్ దమ్ బిర్యానీ" : "Vizag Dum Biryani"}</li>
              <li>{lang === "te" ? "లైవ్ చాట్ & దోశ కౌంటర్" : "Live Tawa Chaat Counters"}</li>
            </ul>
          </div>

          {/* Head Office Info */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif font-bold text-white text-sm sm:text-base border-b border-[#D4AF37]/30 pb-1.5">
              {t("footer.officeTitle")}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="leading-snug">
                  {lang === "te"
                    ? "పెనుగొల్లు గ్రామం, ఎస్.రాయవరం మండలం, అనకాపల్లి జిల్లా, విశాఖపట్నం, ఆంధ్రప్రదేశ్"
                    : "Penugollu Village, S.Rayavaram Mandal, Anakapalli District, Visakhapatnam, Andhra Pradesh"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:9133774043" className="hover:text-amber-300 font-semibold text-white">
                  +91 91337 74043
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="https://www.instagram.com/narencaterings/?hl=en#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 text-stone-300"
                >
                  @narencaterings (16.7K)
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919133774043?text=Hi%20Naren%20Caterings,%20I%20want%20to%20book%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-3.5 rounded-xl bg-[#72152B] hover:bg-[#8B1834] text-white text-xs font-bold border border-[#D4AF37]/40 transition-colors"
              >
                {t("footer.instantBooking")}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors bg-stone-900 px-3 py-1 rounded-full border border-stone-800 text-xs"
          >
            <span>{t("footer.backToTop")}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}

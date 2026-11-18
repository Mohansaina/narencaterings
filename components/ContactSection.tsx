"use client";

import { useState } from "react";
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Hello Naren Caterings,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919133774043?text=${encoded}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-2">
            <span>{t("contact.tag")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {t("contact.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-stone-600 text-xs sm:text-base">
            {t("contact.subheading")}
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Details & Brand Card */}
          <div className="lg:col-span-5 bg-[#72152B] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border-2 border-[#D4AF37]">
            <div>
              <span className="text-amber-300 text-xs font-bold tracking-wider uppercase block mb-1">
                NAREN CATERINGS • VIZAG
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold mb-3">
                {t("contact.titleLeft")}
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed mb-6 font-serif italic text-amber-200">
                &ldquo;{t("contact.teluguQuote")}&rdquo;
              </p>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-amber-200/80 uppercase font-semibold">
                      {t("contact.callLabel")}
                    </span>
                    <a
                      href="tel:9133774043"
                      className="block text-base sm:text-xl font-bold text-white hover:text-amber-300 transition-colors"
                    >
                      +91 91337 74043
                    </a>
                    <span className="text-[10px] sm:text-[11px] text-stone-300 block">
                      {t("contact.callSub")}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-amber-200/80 uppercase font-semibold">
                      {t("contact.locationLabel")}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white leading-relaxed whitespace-pre-line">
                      {t("contact.address")}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-amber-200/80 uppercase font-semibold">
                      {t("contact.instaLabel")}
                    </span>
                    <a
                      href="https://www.instagram.com/narencaterings/?hl=en#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs sm:text-sm font-bold text-amber-300 hover:underline"
                    >
                      @narencaterings
                    </a>
                    <span className="text-[10px] sm:text-[11px] text-stone-300">
                      {t("contact.instaSub")}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-amber-200/80 uppercase font-semibold">
                      {t("contact.hoursLabel")}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {t("contact.hoursSub")}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <a
                href="https://wa.me/919133774043?text=Hi%20Naren%20Caterings,%20I%20want%20to%20discuss%20a%20wedding%20catering%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("contact.chatBtn")}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#72152B] font-bold uppercase tracking-wider block mb-1">
                {t("contact.quickInquiry")}
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-stone-900 mb-1.5">
                {t("contact.formHeading")}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mb-5">
                {t("contact.formSub")}
              </p>

              {sent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    {lang === "te" ? "సందేశం పంపబడింది!" : "Inquiry Dispatched!"}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    {lang === "te"
                      ? "మీ వివరాలు వాట్సాప్‌లో తెరుచుకున్నాయి. త్వరలోనే మాట్లాడతాము."
                      : "Your request opened in WhatsApp. You can also call us at 9133774043."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t("contact.nameLabel")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t("contact.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9133774043"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t("contact.messageLabel")}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Wedding feast for 500 guests in Anakapalli..."
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#72152B] hover:bg-[#8B1834] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("contact.sendBtn")}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Service Coverage Banner */}
            <div className="mt-6 pt-4 border-t border-stone-100 bg-[#FAF7F2] p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#72152B] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[11px] sm:text-xs text-stone-700">
                <strong className="text-stone-900 block font-semibold leading-tight">
                  {t("contact.coverageTitle")}
                </strong>
                <span className="leading-snug">{t("contact.coverageText")}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t, lang } = useLanguage();

  const reviews = [
    {
      name: lang === "te" ? "సురేష్ & హరిత వర్మ" : "Suresh & Haritha Varma",
      event: lang === "te" ? "కుమార్తె వివాహ మహోత్సవం (1,200 మంది)" : "Daughter's Grand Wedding (1,200 Guests)",
      location: lang === "te" ? "MVP కాలనీ, విశాఖపట్నం" : "MVP Colony, Visakhapatnam",
      teluguExcerpt: "మా అమ్మాయి పెళ్ళికి వచ్చిన బంధువులందరూ భోజనం అద్భుతం అని మెచ్చుకున్నారు!",
      comment:
        lang === "te"
          ? "నరేన్ క్యాటరింగ్స్ మా అమ్మాయి పెళ్ళిని ఎంతో అద్భుతంగా మార్చింది. సాంప్రదాయ అరటి ఆకు విందు, వేడి పూతరేకులు, గుత్తి వంకాయ కూర బంధువులందరినీ ఆకట్టుకున్నాయి. సమయానికి వడ్డన పూర్తయింది."
          : "Naren Caterings made our daughter's wedding truly unforgettable. The traditional Arati Aaku vindu with pure ghee sweets, gutti vankaya, and live hot pootharekulu was praised by all our relatives. The service was royal and completely on time.",
      rating: 5,
    },
    {
      name: lang === "te" ? "రాజా రావు & కుటుంబం" : "Raja Rao & Family",
      event: lang === "te" ? "కుమారుడి వివాహం & రిసెప్షన్ (800 మంది)" : "Son's Marriage & Reception (800 Guests)",
      location: lang === "te" ? "అనకాపల్లి పట్టణం" : "Anakapalli City",
      teluguExcerpt: "నాన్-వెజ్ బిర్యానీ, రొయ్యల ఇగురు, గోంగూర మటన్ టేస్ట్ అసలు మర్చిపోలేం.",
      comment:
        lang === "te"
          ? "కోస్తా ఆంధ్రా నాన్-వెజ్ భోజనం అత్యద్భుతంగా ఉంది! రొయ్యల ఇగురు, గోంగూర మటన్ కట్టెల పొయ్యి రుచితో అసలైన గోదావరి శైలిలో కుదిరాయి. క్యాటరింగ్ కుర్రాళ్ళు క్రమశిక్షణతో వడ్డించారు."
          : "The coastal non-veg feast prepared by Naren Caterings was out of this world! Royyala Iguru and Gongura Mutton tasted just like heirloom Godavari style. The catering team was courteous and swift.",
      rating: 5,
    },
    {
      name: lang === "te" ? "లక్ష్మీ నారాయణ మూర్తి" : "Lakshmi Narayana Murthy",
      event: lang === "te" ? "గృహప్రవేశం & సత్యనారాయణ వ్రతం" : "Gruhapravesam & Satyanarayana Vratam",
      location: lang === "te" ? "ఎస్.రాయవరం మండలం" : "S.Rayavaram Mandal",
      teluguExcerpt: "శ్రీ సత్యనారాయణ స్వామి ప్రసాదం, కమ్మని పులిహోర పరమాద్భుతం.",
      comment:
        lang === "te"
          ? "మాది పెనుగొల్లు ప్రాంతమే. నరేన్ క్యాటరింగ్స్ నమ్మకానికి మారుపేరు. గృహప్రవేశం పూజకు ఉల్లి, వెల్లుల్లి లేని పరమ సాత్విక భోజనం తయారు చేశారు. నాణ్యత, పరిశుభ్రతలో నెంబర్ వన్."
          : "We know Naren Caterings from our native Penugollu. For our housewarming, they prepared pure satvik food for the morning pooja and a grand traditional feast for lunch. Top quality and hygiene.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-2">
            <span>{t("testimonials.tag")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {t("testimonials.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-stone-600 text-xs sm:text-base">
            {t("testimonials.subheading")}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#D4AF37]"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex text-amber-500 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#72152B]/20" />
                </div>

                {/* Telugu Highlight Quote */}
                <p className="font-serif text-xs sm:text-sm font-semibold text-[#72152B] italic mb-2.5 sm:mb-3 leading-snug">
                  &ldquo;{rev.teluguExcerpt}&rdquo;
                </p>

                {/* Body Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 sm:pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{rev.name}</h4>
                    <p className="text-[10px] sm:text-[11px] text-[#C59B27] font-semibold">{rev.event}</p>
                    <p className="text-[10px] text-stone-500">{rev.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t("testimonials.verified")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

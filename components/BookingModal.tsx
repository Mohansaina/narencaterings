"use client";

import { useState } from "react";
import { X, Send, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMenu?: string;
}

export default function BookingModal({ isOpen, onClose, initialMenu = "" }: BookingModalProps) {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("300");
  const [location, setLocation] = useState("Vizag / Anakapalli");
  const [foodType, setFoodType] = useState("Traditional Arati Aaku (Veg)");
  const [notes, setNotes] = useState(initialMenu ? `Selected Menu: ${initialMenu}` : "");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Naren Caterings, I would like to book catering for my upcoming event:\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Event Type: ${eventType}\n` +
      `• Event Date: ${eventDate || "To be decided"}\n` +
      `• Guest Count: ${guests}\n` +
      `• Location / Venue: ${location}\n` +
      `• Food Style: ${foodType}\n` +
      `• Notes: ${notes || "None"}\n\n` +
      `Please contact me with availability and quotation.`
    );
    window.open(`https://wa.me/919133774043?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto border-2 border-[#D4AF37] shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="bg-[#72152B] p-4 sm:p-6 text-white relative rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-amber-300 text-[11px] font-bold tracking-wider uppercase mb-1">
            {t("modal.deskTitle")}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            {t("modal.title")}
          </h3>
          <p className="text-stone-200 text-xs mt-1">
            {t("modal.sub")}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                {t("modal.thankYou").replace("{name}", name || "Sir/Madam")}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mb-6 max-w-md mx-auto">
                {t("modal.thankYouDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href="tel:9133774043"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#72152B] text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  {t("modal.callDirect")}
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-50"
                >
                  {t("modal.close")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.phone")}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9133774043"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                  />
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.eventType")}
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-xs sm:text-sm bg-white"
                  >
                    <option value="Wedding (వివాహం)">Wedding (వివాహం)</option>
                    <option value="Reception (రిసెప్షన్)">Reception (రిసెప్షన్)</option>
                    <option value="Housewarming (గృహప్రవేశం)">Housewarming (గృహప్రవేశం)</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.date")}
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Guests & Food Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.guests")}
                  </label>
                  <input
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t("modal.foodStyle")}
                  </label>
                  <select
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-xs sm:text-sm bg-white"
                  >
                    <option value="Traditional Arati Aaku (Pure Veg)">Traditional Arati Aaku (Pure Veg)</option>
                    <option value="Royal Coastal Non-Veg (Mutton/Biryani)">Royal Coastal Non-Veg (Mutton/Biryani)</option>
                    <option value="Grand Veg Reception Buffet">Grand Veg Reception Buffet</option>
                    <option value="Mixed Veg + Non-Veg Luxury Feast">Mixed Veg + Non-Veg Luxury Feast</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  {t("modal.location")}
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Anakapalli, Vizag, S.Rayavaram, Yelamanchili..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  {t("modal.notes")}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need live counter, sweet varieties..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-[#72152B] text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#72152B] to-[#8B1834] text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 border border-[#D4AF37]/50 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t("modal.submitBtn")}</span>
                </button>
                <p className="text-[10px] text-center text-stone-500 mt-2">
                  {t("modal.whatsappNotice")}
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

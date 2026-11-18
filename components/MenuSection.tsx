"use client";

import { useState } from "react";
import { Utensils, Check, Sparkles, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MenuSectionProps {
  onSelectMenu: (menuName: string) => void;
}

export default function MenuSection({ onSelectMenu }: MenuSectionProps) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("arati-aaku");

  const menuCategories = [
    {
      id: "arati-aaku",
      name: lang === "te" ? "సాంప్రదాయ అరటి ఆకు విందు" : "Traditional Arati Aaku Feast",
      teluguName: "అరటి ఆకు విందు భోజనం (32+ రకాలు)",
      tagline:
        lang === "te"
          ? "తాజా అరటి ఆకుపై స్వచ్ఛమైన నెయ్యి మరియు సాంప్రదాయ వంటకాలతో రాజభోజనం"
          : "The timeless royal Andhra wedding experience served on fresh banana leaf",
      items: [
        {
          category: lang === "te" ? "స్వాగత పానీయాలు (Welcome)" : "Traditional Welcome Drink",
          list: [
            lang === "te" ? "నన్నారి షర్బత్ / పానకం" : "Nannari Sharbat / Panakam",
            lang === "te" ? "లేత కొబ్బరి నీళ్ళు" : "Fresh Tender Coconut Water",
            lang === "te" ? "వాటర్‌మెలన్ మింట్ మోజిటో" : "Watermelon Mint Mojito",
          ],
        },
        {
          category: lang === "te" ? "స్వీట్లు & మిఠాయిలు" : "Sweets & Mithai",
          list: [
            lang === "te" ? "డ్రైఫ్రూట్ బెల్లం పూతరేకులు" : "Bellam Pootharekulu with Dryfruits",
            lang === "te" ? "నేతి బొబ్బట్లు (పూర్ణం)" : "Nethi Bobbatlu (Puran Poli)",
            lang === "te" ? "కాజు కట్లీ / గులాబ్ జామున్" : "Kaju Katli / Gulab Jamun",
            lang === "te" ? "పాలతాళికలు / డ్రైఫ్రూట్ పాయసం" : "Palathalikalu / Dry Fruit Semiya Kheer",
          ],
        },
        {
          category: lang === "te" ? "హాట్స్ & స్నాక్స్" : "Hots & Savories",
          list: [
            lang === "te" ? "మినప గారెలు (అల్లం చట్నీతో)" : "Minapa Garelu with Allam Chutney",
            lang === "te" ? "చిట్టి మైసూర్ బజ్జి" : "Chitti Mysore Bajji",
            lang === "te" ? "కాజు కార్న్ సమోసా" : "Kaju Corn Samosa",
            lang === "te" ? "మిర్చి బజ్జి (ఉల్లిపాయ స్టఫింగ్)" : "Crispy Mirchi Bajji",
          ],
        },
        {
          category: lang === "te" ? "పొడులు & పచ్చళ్ళు" : "Podi & Chutneys",
          list: [
            lang === "te" ? "కంది పొడి + స్వచ్ఛమైన ఆవు నెయ్యి" : "Special Kandi Podi + Pure Cow Ghee",
            lang === "te" ? "గోదావరి మామిడికాయ ఆవకాయ" : "Godavari Mamidikaya Avakaya",
            lang === "te" ? "గుంటూరు గోంగూర పచ్చడి" : "Gongura Pachadi",
            lang === "te" ? "దొండకాయ కొబ్బరి పచ్చడి" : "Dondakaya Kobbari Pachadi",
          ],
        },
        {
          category: lang === "te" ? "అన్నం రకాలు" : "Rice Delicacies",
          list: [
            lang === "te" ? "సాంప్రదాయ చింతపండు పులిహోర" : "Traditional Chintapandu Pulihora",
            lang === "te" ? "బగారా రైస్ / జీరా రైస్" : "Bagara Rice / Jeera Rice",
            lang === "te" ? "ఆవిరి సోనా మసూరి అన్నం" : "Hot Steamed Sona Masoori Rice",
          ],
        },
        {
          category: lang === "te" ? "ఘుమఘుమలాడే కూరలు" : "Authentic Curries",
          list: [
            lang === "te" ? "గుత్తి వంకాయ కూర" : "Gutti Vankaya Kura (Stuffed Brinjal)",
            lang === "te" ? "ఆలూ గోబీ కాజు ఫ్రై" : "Alu Gobi Kaju Fry",
            lang === "te" ? "పొట్లకాయ పాలు కూర" : "Potlakaya Palu Kura",
            lang === "te" ? "దొండకాయ జీడిపప్పు వేపుడు" : "Dondakaya Vepudu with Cashews",
          ],
        },
        {
          category: lang === "te" ? "సాంబారు & రసం" : "Sambar & Rasam Varieties",
          list: [
            lang === "te" ? "పెళ్ళిళ్ళ మునక్కాయ సాంబారు" : "Wedding Special Drumstick Sambar",
            lang === "te" ? "మైసూర్ టమోటా మిరియాల రసం" : "Mysore Tomato Pepper Rasam",
            lang === "te" ? "ఉలవచారు + వెన్న మీగడ" : "Ulavacharu with Cream",
            lang === "te" ? "మజ్జిగ పులుసు" : "Majjiga Pulusu",
          ],
        },
        {
          category: lang === "te" ? "పెరుగు & నంజుళ్ళు" : "Perugu & Accompaniments",
          list: [
            lang === "te" ? "గట్టి మీగడ పెరుగు" : "Getti Perugu (Fresh Curd)",
            lang === "te" ? "గుమ్మడి వడియాలు & అప్పడాలు" : "Vadiyalu & Appadalu",
            lang === "te" ? "స్వీట్ మీఠా పాన్ (బీడా)" : "Sweet Beeda (Meetha Paan)",
          ],
        },
      ],
    },
    {
      id: "non-veg",
      name: lang === "te" ? "రాయల్ నాన్-వెజ్ ఫీస్ట్" : "Royal Coastal Non-Veg Feast",
      teluguName: "రాయల్ నాన్-వెజ్ స్పెషల్ విందు",
      tagline:
        lang === "te"
          ? "కోస్తా ఆంధ్రా సీఫుడ్, ఘుమఘుమలాడే మటన్ బిర్యానీ మరియు నాటుకోడి పులుసు"
          : "Legendary Coastal Andhra & Rayalaseema meat delicacies prepared by culinary masters",
      items: [
        {
          category: lang === "te" ? "స్టార్టర్స్ & అప్పటైజర్స్" : "Starters & Appetizers",
          list: [
            lang === "te" ? "వంజరం చేపల వేపుడు" : "Apollo Fish / Vanjaram Fish Fry",
            lang === "te" ? "రొయ్యల వేపుడు (Prawns Fry)" : "Royyala (Prawns) Vepudu",
            lang === "te" ? "చికెన్ మెజెస్టిక్ / 65" : "Chicken Majestic",
            lang === "te" ? "కాజు చికెన్ పకోడా" : "Kaju Chicken Pakoda",
          ],
        },
        {
          category: lang === "te" ? "బిర్యానీ & రైస్" : "Biryani & Rice",
          list: [
            lang === "te" ? "ఆంధ్రా మటన్ దమ్ బిర్యానీ" : "Signature Andhra Mutton Dum Biryani",
            lang === "te" ? "వైజాగ్ స్పెషల్ చికెన్ బిర్యానీ" : "Vizag Special Chicken Dum Biryani",
            lang === "te" ? "రొయ్యల పులావ్" : "Royyala (Prawns) Pulao",
            lang === "te" ? "బగారా రైస్ + దాల్చా" : "Bagara Rice with Dalcha",
          ],
        },
        {
          category: lang === "te" ? "స్పెషల్ కూరలు & పులుసులు" : "Royal Gravies & Curries",
          list: [
            lang === "te" ? "గోంగూర మటన్ కర్రీ" : "Gongura Mutton Curry",
            lang === "te" ? "నాటుకోడి పులుసు + గారెలు" : "Natukodi Pulusu with Garelu",
            lang === "te" ? "నెల్లూరు చేపల పులుసు" : "Chepala Pulusu (Nellore Style)",
            lang === "te" ? "కోస్తా రొయ్యల ఇగురు" : "Nellore Royyala Iguru",
          ],
        },
        {
          category: lang === "te" ? "డెజర్ట్స్ & పాన్" : "Accompaniments & Desserts",
          list: [
            lang === "te" ? "రుమాలీ రోటీ / బటర్ నాన్" : "Rumali Roti / Butter Naan",
            lang === "te" ? "మిర్చి కా సాలన్ & ఉల్లి రైతా" : "Mirchi Ka Salan & Onion Raitha",
            lang === "te" ? "ఆప్రికాట్ డిలైట్ / షాహీ టుక్డా" : "Apricot Delight / Shahi Tukda",
            lang === "te" ? "కుల్ఫీ ఫలూదా & రాయల్ పాన్" : "Kulfi Falooda & Meetha Paan",
          ],
        },
      ],
    },
    {
      id: "veg-buffet",
      name: lang === "te" ? "గ్రాండ్ వెజ్ రిసెప్షన్ బఫే" : "Deluxe Veg Buffet & Reception",
      teluguName: "గ్రాండ్ వెజ్ రిసెప్షన్ బ్యాంక్వెట్",
      tagline:
        lang === "te"
          ? "మల్టీ-కుజీన్ నార్త్, సౌత్ ఇండియన్ & చైనీస్ లైవ్ కౌంటర్లు"
          : "Opulent multi-cuisine spread with North Indian, South Indian & Chinese live stations",
      items: [
        {
          category: lang === "te" ? "వెల్‌కమ్ డ్రింక్స్ & సూప్స్" : "Welcome Drinks & Soups",
          list: [
            lang === "te" ? "బ్లూ కురసావో కూలర్" : "Blue Curacao Cooler",
            lang === "te" ? "క్రీమ్ ఆఫ్ టమోటో సూప్" : "Cream of Tomato Soup",
            lang === "te" ? "బాదం మిల్క్ (వేడి / చల్లనిది)" : "Badam Milk (Hot / Cold)",
          ],
        },
        {
          category: lang === "te" ? "లైవ్ స్టార్టర్స్" : "Live Starters",
          list: [
            lang === "te" ? "పనీర్ టిక్కా / హరియాలీ పనీర్" : "Paneer Tikka / Hariyali Paneer",
            lang === "te" ? "క్రిస్పీ బేబీకార్న్ సాల్ట్ & పెప్పర్" : "Crispy Baby Corn Salt & Pepper",
            lang === "te" ? "వెజ్ స్ప్రింగ్ రోల్స్" : "Veg Spring Rolls",
          ],
        },
        {
          category: lang === "te" ? "మెయిన్ కోర్స్ గ్రేవీలు" : "Main Course Gravies",
          list: [
            lang === "te" ? "పనీర్ బటర్ మసాలా" : "Paneer Butter Masala",
            lang === "te" ? "కాజు మేథీ చమన్" : "Kaju Methi Chaman",
            lang === "te" ? "దాల్ మఖానీ" : "Dal Makhani",
          ],
        },
        {
          category: lang === "te" ? "రొట్టెలు, రైస్ & స్వీట్లు" : "Breads, Rice & Sweets",
          list: [
            lang === "te" ? "అస్సార్టెడ్ నాన్ & కుల్చా" : "Assorted Naan & Kulcha",
            lang === "te" ? "కశ్మీరీ పులావ్ & వెజ్ బిర్యానీ" : "Kashmiri Pulao & Dum Veg Biryani",
            lang === "te" ? "హాట్ గులాబ్ జామున్ + ఐస్ క్రీం" : "Hot Gulab Jamun with Ice Cream",
          ],
        },
      ],
    },
    {
      id: "live-stalls",
      name: lang === "te" ? "లైవ్ స్టాల్స్ & చాట్ కౌంటర్లు" : "Live Stalls & High-Tea Counters",
      teluguName: "లైవ్ స్టాల్స్, చాట్ & హై-టీ",
      tagline:
        lang === "te"
          ? "సంగీత్, హల్దీ & బర్త్‌డేలకు ప్రత్యక్ష చాట్ మరియు తవా కౌంటర్లు"
          : "High-energy interactive culinary counters customized for Sangeet, Haldi & Receptions",
      items: [
        {
          category: lang === "te" ? "లైవ్ చాట్ కౌంటర్" : "Live Chaat Counter",
          list: [
            lang === "te" ? "పానీపూరి (3 రకాల నీళ్ళు)" : "Pani Puri (3 water flavors)",
            lang === "te" ? "దహీ పూరి & సేవ్‌పూరి" : "Dahi Puri & Sev Puri",
            lang === "te" ? "సమోసా రగడా చాట్" : "Samosa Ragda Chaat",
          ],
        },
        {
          category: lang === "te" ? "లైవ్ తవా కౌంటర్లు" : "Live Tawa Counters",
          list: [
            lang === "te" ? "మినీ నేతి పోడి దోశ & చీజ్ దోశ" : "Mini Ghee Podi Dosa & Cheese Dosa",
            lang === "te" ? "పావ్ బాజీ (బటర్ పావ్)" : "Pav Bhaji with Butter Pav",
            lang === "te" ? "పనీర్ తవా ఫ్రై" : "Paneer & Mushroom Tawa Fry",
          ],
        },
        {
          category: lang === "te" ? "లైవ్ స్వీట్లు & ఐస్ క్రీం" : "Live Sweet & Dessert Counters",
          list: [
            lang === "te" ? "లైవ్ వేడివేడి జిలేబీ & రబడీ" : "Fresh Live Jalebi with Rabdi",
            lang === "te" ? "లైవ్ తాజా పూతరేకుల తయారీ" : "Live Fresh Pootharekulu Making",
            lang === "te" ? "తవా రోల్ ఐస్ క్రీం (స్టోన్ ఐస్ క్రీం)" : "Tawa Ice Cream Rolls",
          ],
        },
        {
          category: lang === "te" ? "టీ, కాఫీ & డ్రింక్స్" : "Beverages & Refreshers",
          list: [
            lang === "te" ? "ఫిల్టర్ కాఫీ & మసాలా చాయ్" : "Filter Coffee & Masala Chai Counter",
            lang === "te" ? "మాక్‌టైల్ బార్" : "Mocktail Bar",
            lang === "te" ? "స్వీట్ పాన్ స్టాల్" : "Royal Meetha Paan Stall",
          ],
        },
      ],
    },
  ];

  const currentMenu = menuCategories.find((m) => m.id === activeTab) || menuCategories[0];

  return (
    <section id="menu" className="py-16 sm:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-2">
            <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t("menu.tag")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {t("menu.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-stone-600 text-xs sm:text-base">
            {t("menu.subheading")}
          </p>
        </div>

        {/* Tab Buttons (Mobile horizontally scrollable without breaking) */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 no-scrollbar">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                activeTab === category.id
                  ? "bg-[#72152B] text-white shadow-md border-2 border-[#D4AF37]"
                  : "bg-white text-stone-700 border border-stone-200 hover:border-[#72152B] hover:text-[#72152B]"
              }`}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Menu Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border-2 border-[#D4AF37]/50 shadow-xl relative overflow-hidden">
          
          {/* Menu Title Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-6 sm:mb-8 border-b border-stone-200 gap-3">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#72152B] uppercase tracking-wider block">
                {currentMenu.teluguName}
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-stone-900 mt-0.5">
                {currentMenu.name}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                {currentMenu.tagline}
              </p>
            </div>

            <button
              onClick={() => onSelectMenu(currentMenu.name)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#72152B] hover:bg-[#8B1834] text-white text-xs sm:text-sm font-bold shadow-md transition-all self-start md:self-center active:scale-95"
            >
              <span>{t("menu.selectBtn")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Menu Items Grid (Responsive 1-col on mobile, 2 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentMenu.items.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200/70 hover:border-[#D4AF37] transition-colors"
              >
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#72152B] mb-2.5 flex items-center gap-1.5 border-b border-amber-900/10 pb-2">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] flex-shrink-0" />
                  <span className="truncate">{group.category}</span>
                </h4>
                <ul className="space-y-1.5">
                  {group.list.map((dish, dIdx) => (
                    <li key={dIdx} className="text-xs sm:text-sm text-stone-700 flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Customization Note */}
          <div className="mt-6 sm:mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-amber-50/70 p-3.5 sm:p-4 rounded-xl">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                {t("menu.customNote")}
              </p>
            </div>
            <a
              href="tel:9133774043"
              className="text-xs sm:text-sm font-bold text-[#72152B] hover:underline flex items-center gap-1.5 whitespace-nowrap self-end sm:self-auto"
            >
              <Phone className="w-3.5 h-3.5" />
              {t("menu.talkToChef")}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

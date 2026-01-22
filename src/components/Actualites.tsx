import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ===============================
   FILTRES
================================ */
const FILTERS = [
  { key: "all", icon: "✨" },
  { key: "activities", icon: "🎬" },
  { key: "projects", icon: "🚀" },
  { key: "events", icon: "📅" },
];

/* ===============================
   DONNÉES ACTUALITÉS (ALIGNÉ PDF)
================================ */
const NEWS = [
  {
    id: 1,
    type: "projects",
    title: "Atelier professionnel sur la distribution et l’exploitation en Afrique",
    date: "2026-02-09",
    image: "/images/news/atelier-reda.jpg",
    highlight: true,
  },
  {
    id: 2,
    type: "activities",
    title: "Renforcement de capacités des exploitants et projectionnistes africains",
    date: "2026-02-10",
    image: "/images/news/formation.jpg",
  },
  {
    id: 3,
    type: "events",
    title: "Projections en plein air et médiation culturelle à Dakar",
    date: "2026-02-12",
    image: "/images/news/open-air.jpg",
  },
  {
    id: 4,
    type: "projects",
    title: "Sorties simultanées de films africains dans le réseau REDA – 2026",
    date: "2026-03-01",
    image: "/images/news/distribution.jpg",
  },
];

export default function Actualites() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNews =
    activeFilter === "all"
      ? NEWS
      : NEWS.filter(item => item.type === activeFilter);

  return (
    <section
      id="actualites"
      className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* DÉCOR LUMINEUX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t("news.title", "Actualités, Projets & Temps forts")}
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {t(
              "news.subtitle",
              "Suivez les initiatives structurantes du réseau REDA pour le développement de la distribution et de l’exploitation cinématographique en Afrique."
            )}
          </p>
        </motion.div>

        {/* ================= FILTRES ================= */}
        <div className="flex flex-wrap gap-4 mb-16">
          {FILTERS.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border
                ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-amber-500 to-red-600 text-black border-transparent shadow-lg"
                    : "text-gray-300 border-white/10 hover:border-amber-500/40"
                }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {t(`news.filters.${filter.key}`, filter.key)}
            </button>
          ))}
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              {/* BADGE PROJET MAJEUR */}
              {item.highlight && (
                <span className="absolute top-5 right-5 z-10 px-4 py-1 text-xs font-bold uppercase tracking-widest
                  bg-gradient-to-r from-amber-500 to-red-600 text-black rounded-full shadow-lg">
                  Projet majeur
                </span>
              )}

              {/* IMAGE */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENU */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Tag size={14} />
                    {t(`news.filters.${item.type}`, item.type)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6">
                  Projet inscrit dans la stratégie de structuration du réseau REDA
                  et du développement du cinéma africain.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-amber-500 font-semibold group-hover:gap-5 transition-all"
                >
                  {t("news.readMore", "Lire la suite")}
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

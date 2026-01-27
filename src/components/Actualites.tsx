import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ===============================
   FORMAT DATE : JJ/MM/AAAA
================================ */
const formatDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

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
   DONNÉES ACTUALITÉS
================================ */
const NEWS = [
  {
    id: 1,
    type: "projects",
    title: "Atelier professionnel sur la distribution et l’exploitation en Afrique",
    date: "2026-02-09",
    highlight: true,
    document: "/documents/All_Document_REDA_ATELIER_EXPLOITATION_DISTRIBUTION.pdf",
  },
  {
    id: 2,
    type: "activities",
    title: "Renforcement de capacités des exploitants et projectionnistes africains",
    date: "2026-02-10",
    document: "/documents/All_Document_REDA_ATELIER_EXPLOITATION_DISTRIBUTION.pdf",
  },
  {
    id: 3,
    type: "events",
    title: "Projections en plein air et médiation culturelle à Dakar",
    date: "2026-02-12",
    document: "/documents/All_Document_REDA_ATELIER_EXPLOITATION_DISTRIBUTION.pdf",
  },
  {
    id: 4,
    type: "projects",
    title: "Sorties simultanées de films africains dans le réseau REDA – 2026",
    date: "2026-03-01",
    document: "/documents/All_Document_REDA_ATELIER_EXPLOITATION_DISTRIBUTION.pdf",
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
      className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
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
            {t("news.title")}
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {t("news.subtitle")}
          </p>
        </motion.div>

        {/* ================= FILTRES ================= */}
        <div className="flex flex-wrap gap-4 mb-16">
          {FILTERS.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all border
                ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-amber-500 to-red-600 text-black border-transparent shadow-lg"
                    : "text-gray-300 border-white/10 hover:border-amber-500/40"
                }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {t(`news.filters.${filter.key}`)}
            </button>
          ))}
        </div>

        {/* ================= LISTE ================= */}
        <div className="space-y-8">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-amber-500/40 transition-all"
            >
              {/* Barre latérale */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-500 to-red-600 rounded-l-2xl" />

              {/* Badge */}
              {item.highlight && (
                <span className="absolute top-6 right-6 px-4 py-1 text-xs font-bold uppercase tracking-widest
                  bg-gradient-to-r from-amber-500 to-red-600 text-black rounded-full">
                  {t("news.badge.highlight")}
                </span>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {formatDate(item.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Tag size={14} />
                  {t(`news.filters.${item.type}`)}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 max-w-3xl mb-6">
                {t("news.description")}
              </p>

              {/* CTA */}
              <a
                href={item.document}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-amber-500 font-semibold hover:gap-5 transition-all"
              >
                {t("news.viewDocument")}
                <ArrowRight size={18} />
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

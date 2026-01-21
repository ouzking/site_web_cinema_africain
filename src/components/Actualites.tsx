import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const FILTERS = [
  { key: "all", icon: "✨" },
  { key: "activities", icon: "🎬" },
  { key: "projects", icon: "🚀" },
  { key: "events", icon: "📅" },
];

const NEWS = [
  {
    id: 1,
    type: "activities",
    title: "Lancement d’un nouveau cinéma partenaire",
    date: "2025-10-12",
    image: "/images/news/cinema.jpg",
  },
  {
    id: 2,
    type: "projects",
    title: "Programme d’expansion régionale REDA",
    date: "2025-11-02",
    image: "/images/news/project.jpg",
  },
  {
    id: 3,
    type: "events",
    title: "Forum africain du cinéma indépendant",
    date: "2025-11-19",
    image: "/images/news/event.jpg",
  },
];

export default function Actualites() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNews =
    activeFilter === "all"
      ? NEWS
      : NEWS.filter(n => n.type === activeFilter);

  return (
    <section id="actualites" className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t("news.title", "Actualités & Activités")}
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            {t(
              "news.subtitle",
              "Découvrez nos projets, activités et événements majeurs à travers le réseau REDA."
            )}
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-16">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border
                ${
                  activeFilter === f.key
                    ? "bg-gradient-to-r from-amber-500 to-red-600 text-black border-transparent"
                    : "text-gray-300 border-white/10 hover:border-amber-500/40"
                }`}
            >
              <span className="mr-2">{f.icon}</span>
              {t(`news.filters.${f.key}`, f.key)}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredNews.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

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

                <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                  {item.title}
                </h3>

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

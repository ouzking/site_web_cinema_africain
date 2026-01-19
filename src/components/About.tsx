import { MapPin, Users, Film, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: MapPin, value: "5", label: t("about.stats.countries") },
    { icon: Film, value: "10", label: t("about.stats.cinemas") },
    { icon: Users, value: "17", label: t("about.stats.screens") },
    { icon: Calendar, value: "5 600+", label: t("about.stats.seats") },
  ];

  return (
    <section
      id="a-propos"
      className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.3),transparent_60%)]"></div>

      <div className="relative container mx-auto px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t("about.title")} <span className="text-amber-500">REDA</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            <img
              src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt={t("about.imageAlt")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t("about.paragraph3")}
            </p>

            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-white/5 rounded-xl">
              <p className="text-gray-200 font-medium">
                {t("about.highlight")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <stat.icon className="w-14 h-14 text-amber-500 mx-auto mb-4" />
              <div className="text-4xl font-extrabold mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

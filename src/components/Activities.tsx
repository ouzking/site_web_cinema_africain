import {
  GraduationCap,
  Calendar,
  TrendingUp,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Activities() {
  const { t } = useTranslation();

  const activities = [
    {
      icon: GraduationCap,
      title: t("activities.items.training.title"),
      description: t("activities.items.training.description"),
      accent: "from-blue-500 to-cyan-600",
    },
    {
      icon: Calendar,
      title: t("activities.items.releases.title"),
      description: t("activities.items.releases.description"),
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: t("activities.items.monitoring.title"),
      description: t("activities.items.monitoring.description"),
      accent: "from-emerald-500 to-green-600",
    },
    {
      icon: Star,
      title: t("activities.items.events.title"),
      description: t("activities.items.events.description"),
      accent: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section
      id="activites"
      className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Décor lumière */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.35),transparent_65%)]"></div>

      <div className="relative container mx-auto px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t("activities.title.part1")}{" "}
            <span className="text-amber-500">
              {t("activities.title.part2")}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            {t("activities.subtitle")}
          </p>
        </motion.div>

        {/* Cartes activités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Halo */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${activity.accent} rounded-3xl`}
              />

              <div
                className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${activity.accent} flex items-center justify-center`}
              >
                <activity.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative text-xl font-bold mb-4">
                {activity.title}
              </h3>

              <p className="relative text-gray-400 leading-relaxed text-sm">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Focus événement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-3xl p-10 md:p-16 text-black shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_70%)]"></div>

          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
              {t("activities.focus.title")}
            </h3>
            <p className="text-lg max-w-3xl mx-auto font-medium">
              {t("activities.focus.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

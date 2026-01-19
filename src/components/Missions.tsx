import { Target, TrendingUp, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Missions() {
  const { t } = useTranslation();

  const missions = [
    {
      icon: Target,
      title: t("missions.items.structuring.title"),
      description: t("missions.items.structuring.description"),
    },
    {
      icon: TrendingUp,
      title: t("missions.items.valuation.title"),
      description: t("missions.items.valuation.description"),
    },
    {
      icon: Globe,
      title: t("missions.items.distribution.title"),
      description: t("missions.items.distribution.description"),
    },
    {
      icon: Zap,
      title: t("missions.items.digital.title"),
      description: t("missions.items.digital.description"),
    },
  ];

  return (
    <section
      id="missions"
      className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Lumières décoratives */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/40 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t("missions.title.prefix")}{" "}
            <span className="text-amber-500">
              {t("missions.title.highlight")}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            {t("missions.subtitle")}
          </p>
        </motion.div>

        {/* Cartes missions */}
        <div className="grid md:grid-cols-2 gap-10">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-10 hover:-translate-y-3 transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Halo */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-amber-500 to-red-600"></div>

              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-lg">
                  <mission.icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {mission.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

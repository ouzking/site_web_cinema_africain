import { Film, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      />

      {/* Overlay cinéma */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.15),transparent_65%)]"></div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Icône */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 to-red-600 rounded-full mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          <Film size={44} className="text-black" />
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          REDA
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-amber-500 font-light mb-6"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-14"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#a-propos"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 text-black font-bold uppercase tracking-wide shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform"
          >
            {t("hero.cta.discover")}
          </a>

          <a
            href="#contact"
            className="px-10 py-4 rounded-xl border border-white/30 text-white font-semibold uppercase tracking-wide backdrop-blur-md hover:bg-white/10 transition-all"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#a-propos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown
          size={36}
          className="animate-bounce opacity-80 hover:opacity-100"
        />
      </motion.a>
    </section>
  );
}

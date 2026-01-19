import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import image1 from "../assets/dakar.jpg";
import image2 from "../assets/mali.jpg";
import image3 from "../assets/burkinaa.jpg";
import image4 from "../assets/camerounn.jpg";
import image5 from "../assets/burkina.jpg";


export default function Network() {
  const { t } = useTranslation();

  const countries = [
    { key: "senegal", flag: "🇸🇳", image: image1 },
    { key: "mali", flag: "🇲🇱", image: image2 },
    { key: "burkina", flag: "🇧🇫", image: image5 },
    { key: "cameroon", flag: "🇨🇲", image: image4 },
    { key: "ivoryCoast", flag: "🇨i", image: image3 },
  ];

  return (
    <section id="reseau" className="py-24 bg-white relative overflow-hidden">
      {/* Décor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("network.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("network.subtitle")}
          </p>
        </motion.div>

        {/* Pays */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {countries.map((country, index) => (
            <motion.div
              key={country.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={country.image}
                alt={t(`network.countries.${country.key}`)}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Contenu */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {t(`network.countries.${country.key}`)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Siège social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          <div className="flex items-start gap-6 text-white">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center">
              <MapPin size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t("network.headOffice.title")}
              </h3>

              <p className="text-lg text-gray-300 mb-2">
                <span className="font-semibold text-amber-400">REDA</span>{" "}
                {t("network.headOffice.subtitle")}
              </p>

              <p className="text-gray-400">
                {t("network.headOffice.address1")}
              </p>
              <p className="text-gray-400">
                {t("network.headOffice.address2")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

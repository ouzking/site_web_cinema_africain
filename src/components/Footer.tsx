import { Mail, MapPin, Film } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t("footer.nav.home"), href: "#accueil" },
    { label: t("footer.nav.about"), href: "#a-propos" },
    { label: t("footer.nav.missions"), href: "#missions" },
    { label: t("footer.nav.activities"), href: "#activites" },
    { label: t("footer.nav.network"), href: "#reseau" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white pt-24 pb-10 overflow-hidden"
    >
      {/* Lumière de fond */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,rgba(255,180,0,0.35),transparent_65%)]"></div>

      <div className="relative container mx-auto px-6">
        {/* Contenu principal */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Identité */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Film size={26} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold tracking-wide">
                  REDA
                </h3>
                <p className="text-amber-500 text-sm uppercase tracking-widest">
                  {t("footer.tagline")}
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-8 tracking-wide">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <span className="w-0 h-px bg-amber-500 mr-0 group-hover:w-6 group-hover:mr-3 transition-all duration-300"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-8 tracking-wide">
              {t("footer.contact.title")}
            </h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-500 mt-1" />
                <div className="text-gray-400 leading-relaxed">
                  <p className="font-medium text-gray-300">
                    {t("footer.contact.cinema")}
                  </p>
                  <p>{t("footer.contact.address1")}</p>
                  <p>{t("footer.contact.address2")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-amber-500" />
                <a
                  href="mailto:contact@reda-afrique.org"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  contact@reda-afrique.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm tracking-wide">
              © {currentYear} REDA — {t("footer.rights")}
            </p>

            <div className="flex space-x-8 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-amber-500 transition-colors"
              >
                {t("footer.legal")}
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-500 transition-colors"
              >
                {t("footer.privacy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

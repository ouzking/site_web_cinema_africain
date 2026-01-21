import { useState, useEffect } from "react";
import { Menu, X, Film, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

/* ===============================
   LANGUES DISPONIBLES
================================ */
const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "wo", label: "Wolof", flag: "🇸🇳" },
];

export default function Header() {
  const { t, i18n } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  /* ===============================
     SCROLL EFFECT
  ================================ */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     CHANGE LANGUAGE
  ================================ */
  const changeLanguage = (lang: "fr" | "en" | "wo") => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  /* ===============================
     NAVIGATION LINKS
  ================================ */
  const navLinks = [
    { href: "#accueil", label: t("nav.home") },
    { href: "#a-propos", label: t("nav.about") },
    { href: "#missions", label: t("nav.missions") },
   
    { href: "#actualites", label: t("nav.news") },
    { href: "#reseau", label: t("nav.network") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* ========== LOGO ========== */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Film className="text-black" />
              </div>
              <div>
                <h1 className="text-white font-extrabold text-xl tracking-wide">
                  REDA
                </h1>
                <p className="text-amber-500 text-xs uppercase tracking-widest">
                  {t("header.tagline")}
                </p>
              </div>
            </div>

            {/* ========== DESKTOP NAV ========== */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* ===== LANGUAGE SWITCHER (DESKTOP) ===== */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="
                    flex items-center gap-3 px-5 py-2.5
                    rounded-full bg-white/5 backdrop-blur-xl
                    border border-white/10 text-gray-200
                    hover:border-amber-500/50 hover:text-amber-400
                    transition-all duration-300 shadow-lg
                  "
                >
                  <span className="text-xl">{currentLang.flag}</span>
                  <span className="text-sm font-medium">
                    {currentLang.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="
                        absolute right-0 mt-4 w-56 rounded-2xl overflow-hidden
                        bg-black/95 backdrop-blur-2xl
                        border border-white/10
                        shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                      "
                    >
                      {LANGUAGES.map(lang => {
                        const isActive = i18n.language === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code as any)}
                            className={`
                              w-full flex items-center gap-4 px-6 py-4
                              transition-all duration-300
                              ${
                                isActive
                                  ? "bg-gradient-to-r from-amber-500/20 to-red-600/20 text-amber-400"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }
                            `}
                          >
                            <span className="text-2xl">{lang.flag}</span>
                            <div>
                              <p className="font-semibold">{lang.label}</p>
                              <p className="text-xs uppercase tracking-widest opacity-60">
                                {lang.code}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ========== MOBILE BUTTON ========== */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex justify-between items-center mb-16">
                <span className="text-white font-bold text-lg">REDA</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
                >
                  <X size={28} />
                </button>
              </div>

              <ul className="space-y-8">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-gray-300 hover:text-amber-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ===== LANGUAGE SWITCHER MOBILE ===== */}
              <div className="mt-16">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-6">
                  Langue
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {LANGUAGES.map(lang => {
                    const isActive = i18n.language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code as any)}
                        className={`
                          flex flex-col items-center gap-2 py-4 rounded-xl border
                          transition-all duration-300
                          ${
                            isActive
                              ? "border-amber-500 bg-amber-500/10 text-amber-400"
                              : "border-white/10 text-gray-300 hover:border-amber-500/40"
                          }
                        `}
                      >
                        <span className="text-3xl">{lang.flag}</span>
                        <span className="text-sm font-medium">
                          {lang.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

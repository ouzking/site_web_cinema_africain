import i18n from "i18next";

export default function LanguageSwitcher() {
  const changeLang = (lang: "fr" | "en" | "wo") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLang("fr")}>🇫🇷 FR</button>
      <button onClick={() => changeLang("en")}>🇬🇧 EN</button>
      <button onClick={() => changeLang("wo")}>🇸🇳 WO</button>
    </div>
  );
}

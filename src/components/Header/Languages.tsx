import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages = ({ t }) => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <div className="languages">
      <span
        className="cursor-pointer small-caps px-3"
        onClick={() => switchLanguage("fr")}
      >
        {t("header.fr")}
      </span>
      <span className="small-caps">|</span>
      <span
        className="cursor-pointer small-caps px-3"
        onClick={() => switchLanguage("en")}
      >
        {t("header.en")}
      </span>
    </div>
  );
};

export default Languages;
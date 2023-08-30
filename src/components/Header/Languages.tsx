import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

export interface LanguagesProps {
  t: TFunction;
}

const Languages = ({ t }: LanguagesProps) => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
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
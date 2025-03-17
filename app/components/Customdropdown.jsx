import React, { useState } from "react";
import { useRouter } from "next/navigation"

const LanguageSelector = () => {

   const router = useRouter();
   const { locale} = router;
 
  
  
   const languages = [
     { code: "en", name: "English", flag: "🌐" },
     { code: "fr", name: "Français", flag: "🇫🇷" },
     { code: "nl", name: "Dutch", flag: "🇳🇱" },
     { code: "de", name: "German", flag: "🇩🇪" },
   ];
 


   

  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
  
    // Dynamically construct the URL based on the selected language
    const selectedLanguage = selectedLocale === 'en'
      ? 'https://sharplogicians.com'
      : `https://sharplogicians.${selectedLocale}`;
  
    // Open the URL in a new tab for non-English languages, in the same tab for English
    window.open(selectedLanguage, selectedLocale === 'en' ? '_self' : '_blank');
  };
  return (
    <div className="select-container">
        <select
          id="language-select"
          value={locale}
          onChange={changeLanguage}
          // className="text-white  "
        >
          {languages.map((loc) => (
            <option key={loc.code} value={loc.code}>
              {loc.flag} {loc.name}
            </option>
          ))}
        </select>
      </div>
  );
};

export default LanguageSelector;
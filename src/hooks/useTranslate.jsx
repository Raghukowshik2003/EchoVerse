import { useEffect, useState } from "react";
import axios from "axios";

// Mapping language names to their ISO codes
const languageCodes = {
  English: "en",
  Spanish: "es",
  French: "fr",
  German: "de",
  Chinese: "zh-CN",
  Hindi: "hi",
};

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const targetLang = languageCodes[selectedLanguage] || "en";
        const encodedText = encodeURIComponent(sourceText);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodedText}`;
        const response = await axios.get(url);
        // Response structure: [ [ [translatedText, originalText, ...] ], ... ]
        const translatedText = response.data[0][0][0];
        setTargetText(translatedText);
      } catch (error) {
        console.error("Error translating text:", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;

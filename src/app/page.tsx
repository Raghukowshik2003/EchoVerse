"use client";
import "regenerator-runtime/runtime";
import Image from 'next/image';
import React, { useState, ChangeEvent } from "react";
import {
  IconCopy,
  IconVolume,
} from "@tabler/icons-react";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import TextArea from "@/components/Inputs/TextArea";
import FileUpload from "@/components/Inputs/FileUpload";

import LanguageSelector from "@/components/Inputs/LanguageSelector";
import useTranslate from "@/hooks/useTranslate";
import { rtfToText } from "@/utils/rtfToText";
import TextAreaContainer from "@/components/ui/TextAreaContainer";
import Splite from "@/components/ui/splite";
import TextRotate from "@/components/ui/text-rotate";


const Home: React.FC = () => {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Hindi",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    // Implement like logic
  };

  const handleDislike = () => {
    // Implement dislike logic
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      localStorage.setItem("favoriteTranslation", targetText);
    } else {
      localStorage.removeItem("favoriteTranslation");
    }
  };

  const handleAudioPlayback = (text: string, language: string) => {
    if (!text) return; // Prevent speaking empty text

    const synth = window.speechSynthesis;
    synth.cancel(); // 🛑 Stop any ongoing speech before starting a new one

    const utterance = new SpeechSynthesisUtterance(text);

    let voices = synth.getVoices();
    if (!voices.length) {
      synth.onvoiceschanged = () => {
        voices = synth.getVoices();
        setVoiceAndSpeak(voices, utterance, language);
      };
    } else {
      setVoiceAndSpeak(voices, utterance, language);
    }
  };

  const setVoiceAndSpeak = (
    voices: SpeechSynthesisVoice[],
    utterance: SpeechSynthesisUtterance,
    language: string
  ) => {
    console.log("✅ Available voices:", voices.map((v) => v.name)); // Debugging

    const voiceMap = {
      English: "Microsoft Mark - English (United States)", // Best English voice
      Spanish: "Microsoft Jorge Online (Natural) - Spanish (Mexico)", // Best Spanish voice
      French: "Microsoft Denise Online (Natural) - French (France)", // Best French voice
      German: "Microsoft Conrad Online (Natural) - German (Germany)", // Best German voice
      Chinese: "Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)", // Best Chinese voice
      Hindi: "Microsoft Hemant - Hindi (India)",
    };

    let selectedVoice = voices.find((voice) =>
      voice.name.includes(voiceMap[language as keyof typeof voiceMap])
    );

    if (language === "Chinese" && !selectedVoice) {
      selectedVoice = voices.find((voice) => voice.lang.includes("zh"));
    }

    if (!selectedVoice) {
      console.error("❌ No voice found for:", language);
      return;
    }

    utterance.voice = selectedVoice;
    utterance.lang = getLanguageCode(language);
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  const getLanguageCode = (language: string) => {
    const languageCodes: { [key: string]: string } = {
      English: "en-US",
      Spanish: "es-ES",
      French: "fr-FR",
      German: "de-DE",
      Chinese: "zh-CN",
      Hindi: "hi-IN",
    };
    return languageCodes[language] || "en-US";
  };

  return (
    <>
      <div className="w-full bg-black bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center min-h-screen">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-hidden flex flex-col items-center justify-center w-full h-full pt-8 lg:mt-[-40px]">
          <div className="text-center mt-8 lg:mt-[-10px]">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200 glowing-text">
              <span className="text-[#FF7F01]">Echo</span><span className="text-[#075ff5]">Verse</span>
            </h1>
            <div className="mt-3 lg:mt-3 flex flex-col items-center">
              <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl glowing-text">
                AI-Powered Multilingual Communication
              </p>
              <div className="mt-2 glowing-text">
                <TextRotate
                  texts={['Speak', 'Translate', 'Connect']}
                  mainClassName="text-white px-2 sm:px-3 md:px-4 bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg"
                  staggerDuration={0.05}
                  rotationInterval={3000}
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-10 lg:mt-[-10px] mx-auto max-w-6xl relative flex flex-col lg:flex-row items-center justify-center w-full h-full">
              <div className="flex flex-col lg:w-1/2 justify-center items-center w-full gap-6 px-10 mt-4">
                <div className="w-full mb-4">
                  <TextAreaContainer>
                    <TextArea
                      id="source-language"
                      value={sourceText}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setSourceText(e.target.value)
                      }
                      placeholder="Source Language"
                      maxWords={2000} // Pass the maxWords prop
                    />
                    <div className="flex flex-row justify-between w-full mt-2">
                      <span className="cursor-pointer flex space-x-2 flex-row" style={{ marginTop: '-20px' }}>
                        <div className="bg-blue-600 p-3 rounded-full ">
                          <SpeechRecognitionComponent
                            setSourceText={setSourceText}
                            getLanguageCode={getLanguageCode}
                            selectedLanguage={selectedLanguage}
                          />
                        </div>
                        <div className="bg-blue-600 p-3 rounded-full">
                          <IconVolume
                            size={22}
                            onClick={() =>
                              handleAudioPlayback(sourceText, selectedLanguage)
                            }
                          />
                        </div>
                        <div className="bg-blue-600 p-3 rounded-full">
                          <FileUpload handleFileUpload={handleFileUpload} />
                        </div>
                      </span>
                      <span className="text-sm pr-4">{sourceText.trim().split(/\s+/).length} / 2000</span>
                    </div>
                  </TextAreaContainer>
                </div>
                <div className="w-full">
                  <TextAreaContainer>
                    <TextArea
                      id="target-language"
                      value={targetText}
                      onChange={() => {}}
                      placeholder="Target Language"
                      maxWords={2000} // Pass the maxWords prop
                    />
                    <div className="flex flex-row justify-between w-full mt-2">
                      <span className="cursor-pointer flex items-center space-x-2 flex-row" style={{ marginTop: '-20px' }}>
                        <div className="bg-blue-600 p-1 rounded-full">
                          <LanguageSelector
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            languages={languages}
                          />
                        </div>
                        <div className="bg-blue-600 p-3 rounded-full">
                          <IconVolume
                            size={22}
                            onClick={() =>
                              handleAudioPlayback(targetText, selectedLanguage)
                            }
                          />
                        </div>
                      </span>
                      <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer" style={{ marginTop: '-20px' }}>
                        <div className="bg-blue-600 p-3 rounded-full">
                          <IconCopy size={22} onClick={handleCopyToClipboard} />
                        </div>
                        {copied && (
                          <span className="text-xs text-green-500">Copied!</span>
                        )}
                      </div>
                    </div>
                  </TextAreaContainer>
                </div>
              </div>
              <div className="flex items-center justify-center w-full lg:w-1/2 h-full mt-10 lg:mt-0 lg:h-auto lg:w-auto lg:flex-shrink-0 lg:pl-20 lg:pt-0">
                <Splite />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
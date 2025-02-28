import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

const SpeechRecognitionComponent = ({ setSourceText, getLanguageCode, selectedLanguage }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    console.log("🎤 Transcript Updated:", transcript);
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handleVoiceRecording = () => {
    if (!browserSupportsSpeechRecognition) {
      console.error("❌ Speech Recognition is not supported in this browser!");
      alert("Speech Recognition is not supported in this browser!");
      return;
    }

    if (listening) {
      console.log("⏹ Stopping listening...");
      SpeechRecognition.stopListening();
    } else {
      console.log("🎙 Starting listening...");
      SpeechRecognition.startListening({ continuous: true, language: getLanguageCode(selectedLanguage) });
    }
  };

  return (
    <div>
      <IconMicrophone
        size={24}
        className={`cursor-pointer ${listening ? "text-green-500" : "text-gray-400"}`}
        onClick={handleVoiceRecording}
      />
    </div>
  );
};

export default SpeechRecognitionComponent;

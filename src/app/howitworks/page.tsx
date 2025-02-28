// src/app/howitworks.tsx
import React from 'react';
import Button from '@/components/Button';
import '../../components/Navbar'; // Ensure you have a Navbar component
import styles from '@/app/howitworks.module.css' // Create a CSS module for styling
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    
    <div className={styles.container}>
      <Button href="/">Back Home</Button> {/* Use the custom button */}
      <div className={styles.section}>
      <h1 className='glowing-text'>🤖A Brief Information About Every Feature </h1>
      </div>
      <div className={styles.section}>
        <h2>Speech-to-Speech (S2S) Translation</h2>
        <Image src="/pic1.jpg" alt="Step 1" width={700} height={400} />
        <p>Speech-to-Speech translation works by first converting spoken input into text using speech recognition. The transcribed text is then translated into the target language through a translation model. Once translated, the text is processed by a text-to-speech engine, which generates natural-sounding speech in the desired language. Finally, the translated speech is played back to the user, enabling real-time multilingual communication.</p>
      </div>
      <div className={styles.section}>
        <h2>Speech-to-Text (S2T) Translation</h2>
        <Image src="/pic2.jpg" alt="Step 2" width={700} height={400} />
        <p>Speech-to-Text translation captures spoken words through a microphone and converts them into text. The audio input is processed to identify words, recognize patterns, and transcribe the speech accurately. The transcribed text is then displayed in real time, allowing users to read their spoken words or use them for further translation and processing.</p>
      </div>
      <div className={styles.section}>
        <h2>Text-to-Speech (TTS) Conversion</h2>
        <Image src="/pic3.png" alt="Step 3" width={700} height={400} />
        <p>Text-to-Speech conversion takes written text as input and synthesizes it into human-like speech. The text is analyzed for linguistic patterns, phonetics, and intonation to ensure natural pronunciation. The processed text is then converted into audio, which is played back to the user, allowing them to listen to the content instead of reading it.</p>
      </div>
      <div className={styles.section}>
        <h2>Text-to-Text (T2T) Translation</h2>
        <Image src="/pic4.png" alt="Step 4" width={700} height={400} />
        <p>Text-to-Text translation takes input text in one language and translates it into another while preserving grammar, meaning, and context. The translation process involves language detection, sentence structure analysis, and contextual adaptation to ensure accuracy. Once processed, the translated text is displayed, allowing users to understand and communicate across different languages.</p>
      </div>
    </div>
  );
};

export default HowItWorks;


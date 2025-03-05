import React from 'react';
import Button from '@/components/Button';
import '../../components/Navbar'; // Ensure you have a Navbar component
import styles from '@/app/howitworks.module.css'; // Create a CSS module for styling
import Image from 'next/image';
import ClientLoadingScreen from '@/components/ClientLoadingScreen'; // Import the ClientLoadingScreen component
import { Timeline } from '@/components/ui/timeline'; // Import the Timeline component

const HowItWorks: React.FC = () => {
  const data = [
    {
      title: "Speech-to-Speech (S2S) Translation",
      content: (
        <div className={styles.timelineContent}>
          <Image src="/pic1.jpg" alt="Step 1" width={1200} height={600} />
          <p>Converts speech to text, translates it, then synthesizes speech in the target language for real-time communication.</p>
        </div>
      ),
    },
    {
      title: "Speech-to-Text (S2T) Translation",
      content: (
        <div className={styles.timelineContent}>
          <Image src="/pic2.jpg" alt="Step 2" width={1200} height={600} />
          <p>Captures audio, transcribes speech into text, and displays it in real time for further use.</p>
        </div>
      ),
    },
    {
      title: "Text-to-Speech (TTS) Conversion",
      content: (
        <div className={styles.timelineContent}>
          <Image src="/pic3.png" alt="Step 3" width={1200} height={600} />
          <p>Converts written text into natural-sounding speech using linguistic analysis and phonetics.</p>
        </div>
      ),
    },
    {
      title: "Text-to-Text (T2T) Translation",
      content: (
        <div className={styles.timelineContent}>
          <Image src="/pic4.png" alt="Step 4" width={1200} height={600} />
          <p>Translates text between languages while preserving meaning, grammar, and context.</p>
        </div>
      ),
    },
  ];

  return (
    <ClientLoadingScreen>
      <div className={styles.container}>
        <Button href="/">Back Home</Button> {/* Use the custom button */}
        <div className={styles.timelineContainer}>
          <Timeline data={data} />
        </div>
      </div>
    </ClientLoadingScreen>
  );
};

export default HowItWorks;
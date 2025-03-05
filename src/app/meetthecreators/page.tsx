import React from 'react';
import Button from '@/components/Button';
import styles from './meetthecreators.module.css'; // Create a CSS module for styling
import { FaLinkedin } from 'react-icons/fa'; // Import the LinkedIn icon from react-icons
import Image from 'next/image';
import ClientLoadingScreen from '@/components/ClientLoadingScreen'; // Import the ClientLoadingScreen component

const MeetTheCreators: React.FC = () => {
  return (
    <ClientLoadingScreen>
      <div className={styles.container}>
        <Button href="/">Back Home</Button> {/* Use the custom button */}
        <h1 className={styles.heading}>Meet The Creators</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image src="/raghu.jpeg" alt="Creator 1" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Ganta Raghu Kowshik</p>
              <a href="https://www.linkedin.com/in/raghukowshik/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/venkat.jpeg" alt="Creator 2" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Penumalli Dindi Venkat</p>
              <a href="https://www.linkedin.com/in/venkat-penumalli-08756a222/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/one.png" alt="Creator 3" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Creator 3 Name</p>
              <a href="https://www.linkedin.com/in/creator3/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/one.png" alt="Creator 4" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Creator 4 Name</p>
              <a href="https://www.linkedin.com/in/creator4/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/one.png" alt="Creator 5" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Creator 5 Name</p>
              <a href="https://www.linkedin.com/in/creator5/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/one.png" alt="Creator 6" className={styles.cardImage} width={300} height={200} />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>Creator 6 Name</p>
              <a href="https://www.linkedin.com/in/creator6/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ClientLoadingScreen>
  );
};

export default MeetTheCreators;
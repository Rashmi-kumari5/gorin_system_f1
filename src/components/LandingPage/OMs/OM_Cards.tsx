import React from 'react';
import Image from 'next/image';
import styles from './OM_Cards.module.css';

interface OMCardsProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const OMCards: React.FC<OMCardsProps> = ({ image, title, description, buttonText }) => {
  return (
    <div className={styles.omCard}>
      <div className={styles.imageWrapper}>
        <Image className={styles.img} src={image} alt={title} layout="responsive" width={357} height={276} />
      </div>
      <div className={styles.contentWrapper}>
        <h4 className={styles.omTitle}>{title}</h4>
        <p className={styles.omDescription}>{description}</p>
        <button className={styles.ctaButton}>{buttonText}</button>
      </div>
    </div>
  );
};

export default OMCards;

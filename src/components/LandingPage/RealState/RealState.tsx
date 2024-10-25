import React from 'react';
import Image from 'next/image';
import styles from './RealState.module.css';

interface RealStateProps {
  name: string;
  icon: string;
}

const RealState: React.FC<RealStateProps> = ({ name, icon }) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={name} width={64} height={64} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default RealState;

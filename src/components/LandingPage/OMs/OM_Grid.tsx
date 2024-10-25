import React from 'react';
import SampleOMCard from './OM_Cards';
import styles from './OM_Grids.module.css';

interface OMData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface OMGridProps {
  omData: OMData[];
}

const OMGrid: React.FC<OMGridProps> = ({ omData }) => {
  return (
    <div className={styles.omContainer}>
      <div className={styles.omLayer}>
        <h2 className={styles.omHeading}>Sample OMs created with our platform</h2>
        <div className={styles.omGrid}>
          {omData.map((om, index) => (
            <SampleOMCard
              key={index}
              image={om.image}
              title={om.title}
              subtitle={om.subtitle}
              description={om.description}
              buttonText={om.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OMGrid;

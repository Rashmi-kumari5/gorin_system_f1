import React from 'react';
import PropertyCard from './RealState';
import styles from './TypeGrid.module.css';

interface PropertyType {
  name: string;
  icon: string;
}

interface PropertyTypeGridProps {
  propertyTypes: PropertyType[];
}

const PropertyTypeGrid: React.FC<PropertyTypeGridProps> = ({ propertyTypes }) => {
  return (
    <div className={styles.gridContainer}>
      <h3 className={styles.gridSubheading}>Create OMs and Ads For</h3>
      <h2 className={styles.gridHeading}>Various Real Estate Property Types</h2>
      <div className={styles.gridItems}>
        {propertyTypes.map((property, index) => (
          <PropertyCard key={index} name={property.name} icon={property.icon} />
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeGrid;

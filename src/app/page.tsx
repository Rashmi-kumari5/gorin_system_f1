import styles from "./page.module.css";
import Header from "@/components/LandingPage/Header/Header";
import SellCri from "@/components/LandingPage/SellCri/SellCri";
import RealState from "@/components/LandingPage/RealState/TypeGrid";
import OMGrid from "@/components/LandingPage/OMs/OM_Grid";


const propertyTypes = [
  { name: 'Retail', icon: '/Images/retail.png' },
  { name: 'Multi-family', icon: '/Images/multi-family.png' },
  { name: 'Office', icon: '/Images/office.png' },
  { name: 'Industrial', icon: '/Images/industrial.png' },
  { name: 'Hotel', icon: '/Images/hotel.png' },
  { name: 'Land', icon: '/Images/land.png' },
];

const omData = [
  {
    image: '/Images/office-om.png',
    title: 'Office OM',
    subtitle: 'Southfield Office',
    description: 'All classes of office buildings, loft/creative, medical.',
    buttonText: 'View Sample Template',
  },
  {
    image: '/Images/retail-om.png',
    title: 'Retail OM',
    subtitle: 'Crowder Plaza',
    description: 'Strip centers, street retail, vehicle related, and more.',
    buttonText: 'View Sample Template',
  },
  {
    image: '/Images/multi-family-om.png',
    title: 'Multi-Family OM',
    subtitle: 'Riverbend Apartments',
    description: 'Garden, low-rise, mid-rise, high-rise.',
    buttonText: 'View Sample Template',
  }

];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Header />
        <SellCri />
        <RealState propertyTypes={propertyTypes} />
        <OMGrid omData={omData} />
      </div>
   </div>
  );
}

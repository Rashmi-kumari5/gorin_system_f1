import React from 'react'
import styles from './SellCri.module.css'

import Play from '../../../../public/SVGs/Play'
import Image from 'next/image'

export default function SellCri() {
  return (
      <main className={styles.mainWrapper}>
        <div className={styles.textContainer}>
          <h1><span>Sell CRE Faster</span> with OMs & Ads created in <span>minutes</span></h1>
          <p>Create beautiful Commercial Real Estate Offering Memorandums, Flyers & Ads in minutes with our AI-powered platform.</p>
          <div className={styles.buttonGroup}>
            <button className={styles.freeTrialButton}>Try for free  </button>
            <button className={styles.watchDemoButton}>
            <Play />  Watch Demo
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/Images/menu.jpg" alt="Demo"  width={500} height={400} />
        </div>
      </main>
  )
}

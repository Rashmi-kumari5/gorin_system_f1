"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../../../public/SVGs/Logo";
import Lock from "../../../../public/SVGs/Lock";
import Burger from "../../../../public/SVGs/Burger";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add(styles.mobileMenuOpen);
    } else {
      document.body.classList.remove(styles.mobileMenuOpen);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
          <Burger />
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNav : ""}`}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#" className={styles.lock}>
            <span className={styles.lockIcon}><Lock /></span> Login
          </a>
          <button className={styles.tryNowButton}>Try For Free</button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#" onClick={toggleMobileMenu}>Features</a>
          <hr />
          <a href="#" onClick={toggleMobileMenu}>Pricing</a>
          <hr />
          <a href="#" onClick={toggleMobileMenu} className={styles.lock}>
            <span className={styles.lockIcon}><Lock /></span> Login
          </a>
          <button className={styles.tryNowButton}>Try For Free</button>
        </div>
      )}
    </div>
  );
}

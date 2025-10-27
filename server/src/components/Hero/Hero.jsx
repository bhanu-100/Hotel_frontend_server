import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>
        Welcome to <span className={styles.brand}>Stayio</span>
      </h1>
      <p className={styles.subtitle}>
        Book hotels, villas & homes across 100+ cities.
      </p>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search city, hotel, or landmark..."
          className={styles.input}
        />
        <button className={styles.button}>Search</button>
      </div>
    </section>
  );
};

export default Hero;

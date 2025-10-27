import React from "react";
import styles from "./NearbyCities.module.css";

import mumbai from "../../assets/mumbai.jpg";
import delhi from "../../assets/delhi.jpg";
import goa from "../../assets/goa.jpg";
import jaipur from "../../assets/jaipur.jpg";

const cities = [
  { name: "Mumbai", img: mumbai },
  { name: "Delhi", img: delhi },
  { name: "Goa", img: goa },
  { name: "Jaipur", img: jaipur },
];

const NearbyCities = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Explore Nearby Cities</h2>
      <div className={styles.grid}>
        {cities.map((city, i) => (
          <div key={i} className={styles.cityCard}>
            <img src={city.img} alt={city.name} className={styles.cityImage} />
            <div className={styles.overlay}>
              <h3 className={styles.cityName}>{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyCities;

import React from "react";
import { Bed, ShieldCheck, Clock, Wallet } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  { icon: Bed, title: "Comfort First", desc: "Curated stays with quality beds & hygiene." },
  { icon: ShieldCheck, title: "Secure Booking", desc: "Encrypted transactions with full protection." },
  { icon: Clock, title: "24/7 Support", desc: "Instant help for every traveler." },
  { icon: Wallet, title: "Best Price", desc: "Get premium comfort at budget rates." },
];

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.heading}>Why Choose Stayio?</h2>
      <div className={styles.gridContainer}>
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Subscribe to Stayio Deals</h2>

      <p className={styles.description}>
        Get exclusive discounts, travel inspiration, and early access to premium
        stays — delivered straight to your inbox.
      </p>

      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
        />
        <button className={styles.button}>Subscribe</button>
      </div>

      <p className={styles.note}>
        We respect your privacy. No spam — ever.
      </p>
    </section>
  );
};

export default Newsletter;

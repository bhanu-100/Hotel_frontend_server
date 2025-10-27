import React from "react";
import styles from "./Signup.module.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h2 className={styles.title}>Create Your Stayio Account</h2>
        <p className={styles.subtitle}>Join us to explore the best hotels around you</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input type="password" placeholder="Password" required />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <button type="submit" className={styles.btnSignup}>
            Sign Up
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

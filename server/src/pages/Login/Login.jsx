import React from "react";
import styles from "./Login.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Welcome Back to Stayio</h2>
        <p className={styles.subtitle}>Login to manage your bookings</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input type="password" placeholder="Password" required />
          </div>

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className={styles.btnLogin}>
            Login
          </button>
        </form>

        <p className={styles.signupText}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

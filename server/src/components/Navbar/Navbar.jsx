import React from "react";
import styles from "./Navbar.module.css";
 import { Link } from "react-router-dom";
import { Search, User, CalendarDays, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link to='/'>
        <div className={styles.brand}>
          <img src={logo} alt="Stayio" className={styles.logo} />
          <h1 className={styles.title}>Stayio</h1>
        </div>
        </Link>

        {/* Search Bar */}
        <div className={styles.searchBox}>
          <div className={styles.inputGroup}>
            <MapPin size={18} className={styles.icon} />
            <input
              type="text"
              placeholder="Where to?"
              className={styles.input}
            />
          </div>

          <div className={styles.divider}></div>

          <div className={styles.inputGroup}>
            <CalendarDays size={18} className={styles.icon} />
            <input
              type="text"
              placeholder="Check-in / Check-out"
              className={styles.input}
            />
          </div>

          <button className={styles.searchButton}>
            <Search size={18} />
          </button>
        </div>

        {/* User Section */}
        <div className={styles.userSection}>
          <Link to='/become-host'><button className={styles.hostButton}>Become a Host</button></Link>
          <Link to='/login'><button className={styles.loginButton}>
            <User size={18} />
            <span>Login</span>
          </button></Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={styles.mobileSearch}>
        <input
          type="text"
          placeholder="Search Stayio..."
          className={styles.mobileInput}
        />
        <Search size={18} className={styles.icon} />
      </div>
    </header>
  );
};

export default Navbar;

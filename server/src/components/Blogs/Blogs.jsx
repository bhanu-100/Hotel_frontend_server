import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const posts = [
    {
      title: "Top 10 Beach Destinations in India",
      desc: "Explore India's most stunning beachside getaways for your next vacation.",
    },
    {
      title: "Budget Hotels vs Luxury Stays",
      desc: "Find out what suits your travel style and budget with Stayio.",
    },
    {
      title: "Weekend Getaways from Delhi",
      desc: "Quick escapes from the city that will refresh your mind.",
    },
  ];

  return (
    <section className={styles.blogsSection}>
      <h2 className={styles.title}>Travel Blogs</h2>
      <div className={styles.grid}>
        {posts.map((p, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <button className={styles.readMore}>Read More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

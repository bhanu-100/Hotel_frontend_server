import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Aarav Mehta",
      location: "Mumbai",
      review:
        "Stayio made my Goa vacation unforgettable! Clean rooms, fast check-in, and amazing support.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      review:
        "Superb experience! Booking was smooth, and the hotel quality exceeded expectations.",
      rating: 4,
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Rahul Verma",
      location: "Jaipur",
      review:
        "I loved how simple and secure the booking process was. Highly recommend Stayio!",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Guests Say</h2>
      <div className={styles.reviewsGrid}>
        {reviews.map((r) => (
          <div key={r.id} className={styles.reviewCard}>
            <img src={r.img} alt={r.name} className={styles.userImg} />
            <h3 className={styles.name}>{r.name}</h3>
            <p className={styles.location}>{r.location}</p>

            <div className={styles.rating}>
              {Array(r.rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
            </div>

            <p className={styles.reviewText}>“{r.review}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

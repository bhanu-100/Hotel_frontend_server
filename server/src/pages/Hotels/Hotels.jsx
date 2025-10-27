import React from "react";
import styles from "./Hotels.module.css";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Stayio Grand Palace",
      location: "Indore, Madhya Pradesh",
      price: 2499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1576675784127-b803b900e723?w=900",
    },
    {
      id: 2,
      name: "Hotel Comfort Residency",
      location: "Jaipur, Rajasthan",
      price: 1799,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    },
    {
      id: 3,
      name: "Blue Lagoon Stay",
      location: "Goa",
      price: 3299,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d4?w=900",
    },
  ];

  return (
    <div className={styles.hotelsContainer}>
      <h2 className={styles.title}>Find Your Perfect Stay</h2>
      <p className={styles.subtitle}>Explore hand-picked hotels just for you</p>

      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <div key={hotel.id} className={styles.card}>
            <img src={hotel.image} alt={hotel.name} className={styles.image} />
            <div className={styles.content}>
              <h3>{hotel.name}</h3>
              <p className={styles.location}>{hotel.location}</p>
              <div className={styles.details}>
                <span>₹{hotel.price}/night</span>
                <span>⭐ {hotel.rating}</span>
              </div>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;

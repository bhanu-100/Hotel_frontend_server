import React from "react";
import styles from "./Offers.module.css";
import offer1 from "../../assets/hotel1.jpg";
import offer2 from "../../assets/hotel2.jpg";
import offer3 from "../../assets/hotel3.jpg";
import offer4 from "../../assets/hotel4.jpg";

const offers = [
  {
    id: 1,
    img: offer1,
    title: "Luxury Stay in Goa",
    discount: "Up to 40% Off",
    desc: "Experience ocean-view rooms with top-class amenities.",
  },
  {
    id: 2,
    img: offer2,
    title: "Business Hotels in Delhi",
    discount: "Save 30% Today",
    desc: "Comfort and convenience for corporate travelers.",
  },
  {
    id: 3,
    img: offer3,
    title: "Couple Getaway in Jaipur",
    discount: "Flat 25% Off",
    desc: "Romantic palace-style stays for couples.",
  },
  {
    id: 4,
    img: offer4,
    title: "Adventure Retreats in Manali",
    discount: "Up to 35% Off",
    desc: "Stay in cozy cabins surrounded by snow peaks.",
  },
];

const Offers = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Exclusive Offers for You</h2>

      <div className={styles.offersContainer}>
        {offers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <img src={offer.img} alt={offer.title} className={styles.offerImage} />
            <div className={styles.offerContent}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDiscount}>{offer.discount}</p>
              <p className={styles.offerDesc}>{offer.desc}</p>
              <button className={styles.offerButton}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;

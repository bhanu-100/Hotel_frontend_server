import React from "react";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/hotel2.jpg";
import gallery3 from "../../assets/hotel1.jpg";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.heading}>Gallery</h2>
      <div className={styles.imageGrid}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className={styles.imageItem}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

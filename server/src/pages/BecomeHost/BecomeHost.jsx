import React, { useState } from "react";
import styles from "./BecomeHost.module.css";

const BecomeHost = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Host Form Submitted:", formData);
    alert("Your property has been submitted for review!");
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Become a Host</h2>
      <p className={styles.subtitle}>
        List your property on Stayio and start earning by hosting travelers from all over the world.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Property Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ex: Sea Breeze Resort"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Price per Night (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Property Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe your property and what makes it special..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit Property
        </button>
      </form>
    </section>
  );
};

export default BecomeHost;

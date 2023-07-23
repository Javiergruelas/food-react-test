import React from "react";
import styles from "./Business.module.css";

const business = {
  imageSrc:
    "https://lh3.googleusercontent.com/p/AF1QipOoKxnHaAdROhQaM-LswFFRpL1B-5p1opVm_B9v=s680-w680-h510",
  name: "Nest",
  address: "123 S First Street",
  city: "San Jose",
  state: "CA",
  zipCode: "95111",
  category: "Asian Fusion",
  rating: 4.2,
  reviewCount: 117,
};

const Business = () => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;

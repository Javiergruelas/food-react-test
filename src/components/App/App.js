import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  image:
    "https://d1ralsognjng37.cloudfront.net/8fd484f5-b8c8-4b57-a2a6-0ebbc4900b31.jpeg",
  name: "Nest",
  address: "213 S First Street",
  city: "San Jose",
  state: "CA",
  zipCode: "95112",
  category: "Asian Fusion",
  rating: 4.2,
  reviewCount: 117,
};

const businesses = [business, business, business, business, business, business];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Find Foods</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
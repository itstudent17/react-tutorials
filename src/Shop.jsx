import { useState, useEffect } from "react";

const Shop = () => {
  const fetchItems = async () => {
    const data = await fetch(
      // "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(data, items);
  };

  useEffect(() => {
    fetchItems();
    return () => {};
  }, []);

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};

export default Shop;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      // "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log("data", data);
    console.log("items", items.data);
    setItems(items.data);
  };

  useEffect(() => {
    fetchItems();
    return () => {};
  }, []);

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((i) => (
        <h1 key={i.itemId}>
          <Link to={`/shop/${i.itemId}`}>{i.item.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;

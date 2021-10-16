import { useState, useEffect } from "react";

const Item = (props) => {
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    // TODO fix error with API (url does not return an object - array instead)
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/store/get?id=${props.match.params.id}`
    );
    const item = await data.json();
    console.log("fetched Item", item);
    setItem(item);
  };

  useEffect(() => {
    console.log("match from Route in App.js", props.match);
    fetchItem();
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item?.images?.transparent} alt="" />
    </div>
  );
};

export default Item;

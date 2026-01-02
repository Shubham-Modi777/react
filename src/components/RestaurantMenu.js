import { useEffect, useState } from "react";
import Shimmer from "./Simmer";
import { RestData } from "../utils/mockData";

const MenuCategorys = ({ category }) => (
  <>
    <h3>{category.title}</h3>
    <ul>
      {category.itemCards.map((item) => {
        const price =
          item.card.info.price / 100 || item.card.info.defaultPrice / 100;
        return (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{price}
          </li>
        );
      })}
    </ul>
  </>
);

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const data =
    RestData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log("RestData:", data);

  const cardInfo = RestData[0]?.data?.cards[2]?.card?.card?.info;

  useEffect(() => {
    //fetchMenu();
    setRestInfo(data);
  }, []);

  const fetchMenu = async () => {
    let url =
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5879348&lng=73.7372748&restaurantId=64174";
    const data = await fetch(url);
    //const json = await data.json();
    console.log("jsonData", data);
  };

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>
        {cardInfo.name} ⭐ {cardInfo.avgRatingString} (
        {cardInfo.totalRatingsString})
      </h1>
      <h4 className="cuisines">
        {cardInfo.cuisines.join(", ")} ⚫ {cardInfo.costForTwoMessage}
      </h4>
      {restInfo.categories.map((category) => (
        <MenuCategorys key={category.title} category={category} />
      ))}
    </div>
  );
};

export default RestaurantMenu;

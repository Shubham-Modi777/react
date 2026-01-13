import { useEffect, useState } from "react";
import Shimmer from "./Simmer";
import { RestData } from "../utils/mockData";
import RestaurantCategory from "./RestaurantCategory";

const MenuCategorys = ({ category }) => (
  <>
    <h3 className="text-xl font-bold text-orange-900">{category.title}</h3>
    <ul>
      {category.itemCards.map((item) => {
        const price =
          item.card.info.price / 100 || item.card.info.defaultPrice / 100;
        return (
          <li key={item.card.info.id} className="text-lg">
            {item.card.info.name} - Rs.{price}
          </li>
        );
      })}
    </ul>
  </>
);

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const data =
    RestData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  //console.log("RestData:", data);

  const cardInfo = RestData[0]?.data?.cards[2]?.card?.card?.info;

  const categories =
    RestData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card.card.type ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  console.log("categoryData", categories);

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
    <div className="p-3 m-3 ">
      <div className="text-center">
        {/* <h1 className="text-blue-700 text-xl font-bold shadow-2xl">
          {cardInfo.name} ⭐ {cardInfo.avgRatingString} (
          {cardInfo.totalRatingsString})
        </h1> */}
        <h4 className="gap-2 text-fuchsia-700 text-xl font-medium">
          {/* {cardInfo.cuisines.join(", ")} ⚫ {cardInfo.costForTwoMessage} */}
          Check below food items 🍔🍗 🍕🍟🍚🍨🧁...
        </h4>
      </div>
      <div>
        {/* controled component */}
        {/* Category accordian */}
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

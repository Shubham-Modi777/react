import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Simmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [favDishes, setFavDishes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //https://corsproxy.io/ to avoid CORS error
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879348&lng=73.7372748&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jason = await data.json();

    let resList =
      jason?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("jason", resList);

    setListOfRes(resList);
    setFilteredRes(resList);
    setFavDishes(resList);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let searchFilter = filteredRes.filter((res) => {
                // with {} , we need to use return statement but without {} it's implicit return
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRes(searchFilter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const wanted = new Set([
              "KFC",
              "Pizza Hut",
              "Domino's Pizza",
              "Burger King",
            ]);
            const filterDish = favDishes.filter((dish) =>
              wanted.has(dish.info.name)
            );
            setListOfRes(filterDish);
          }}
        >
          My fav Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

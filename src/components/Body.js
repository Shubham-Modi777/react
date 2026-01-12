import RestaurantCard, { WithBestLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Simmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [favDishes, setFavDishes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const OnlineStatus = useOnlineStatus();
  const BestLabelCard = WithBestLabel(RestaurantCard);

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

    //console.log("jason", resList);

    setListOfRes(resList);
    setFilteredRes(resList);
    setFavDishes(resList);
  };

  if (OnlineStatus === false)
    return (
      <>
        <h1>Opps...!!!😣😣😣</h1>
        <h2>
          Looks like you are offline. Please check your Internet connection.
        </h2>
      </>
    );

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-1">
      <div className="flex m-1">
        <div className="flex items-center gap-2 p-2 ">
          <input
            type="text"
            className="border rounded-sm justify-center p-1"
            placeholder="Search your meal🍔🍗..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-sm font-normal text-amber-50 p-1 m-b-1 w-20 bg-blue-500 rounded-sm cursor-pointer"
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
          className="p-1 m-2  text-amber-50 bg-green-600 rounded-sm border-none hover:bg-amber-800 cursor-pointer"
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
          className="p-1 m-2  text-amber-50 bg-green-600 rounded-sm border-none hover:bg-amber-800 cursor-pointer"
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
      <div className="flex flex-wrap gap-2">
        {listOfRes.map((res) =>
          res.info.avgRating >= 4.4 ? (
            <BestLabelCard key={res.info.id} resData={res.info} />
          ) : (
            <RestaurantCard key={res.info.id} resData={res.info} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;

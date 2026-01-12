import ItemsList from "./ItemsList";
import CategoriesItemList from "./CategoriesItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  console.log("data", data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("click");
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* header*/}
      <div className="w-6/12 mx-auto my-4 p-3 rounded-lg bg-gray-100 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}(
            {data?.itemCards?.length
              ? data?.itemCards?.length
              : data?.categories?.length}
            )
          </span>
          <span>⬇️</span>
        </div>
        {/* body */}
        <div>
          {showItems &&
            (data?.itemCards ? (
              <ItemsList items={data?.itemCards} />
            ) : (
              <CategoriesItemList categories={data?.categories} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

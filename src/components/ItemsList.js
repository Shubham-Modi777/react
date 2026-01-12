import { CDN_URL } from "../utils/constant";

const ItemsList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-1 m-1 border-grey border-b text-left flex justify-between"
          >
            <div className="py-2 w-9/12">
              <span>{item?.card?.info?.name} </span>
              <span>
                {"  "} - ₹ {"  "}
                {item?.card?.info?.price / 100}
              </span>
              <p className="text-sm text-gray-900 pt-2">
                ❇️ {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
              <p className="text-md text-gray-600 pt-2">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button className="px-2 py-1 bg-white shadow-lg rounded-md cursor-pointer">
                  Add+
                </button>
              </div>

              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full rounded-md"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;

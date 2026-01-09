import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData;
  return (
    <div
      className="w-50 h-auto bg-white border-2 border-[#e9dfdf] rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.1)] overflow-hidden p-1 
     hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)]
    hover:-translate-y-1
    transition-all
    duration-300
    ease-in-out
    cursor-pointer"
    >
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <div style={{ padding: "5px" }}>
        <div className="text-blue-900">
          <Link to={`/restaurant/${resData.id}`}>{name}</Link>
        </div>

        <h4>{cuisines.join(",")} </h4>
        <h4> {avgRating} </h4>
        <h4> {sla.slaString} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

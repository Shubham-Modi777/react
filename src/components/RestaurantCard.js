import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData;
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + resData.cloudinaryImageId} />
      <div style={{ padding: "5px" }}>
        <Link to={`/restaurant/${resData.id}`}>{name}</Link>
        <h4>{cuisines.join(",")} </h4>
        <h4> {avgRating} </h4>
        <h4> {sla.slaString} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

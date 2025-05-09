import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resData = props.resData;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="restaurant-card">
      <div className="restaurant-info"></div>
      <img
        className="cardImage"
        src={CDN_URL + cloudinaryImageId}
        alt="LogoImage"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

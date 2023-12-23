import React from "react";
import FoodOrderCArd from "../../../components/foodOrderCard/FoodOrderCArd";

const FoodItems = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {item.map((item) => (
        <FoodOrderCArd key={item._id} item={item}></FoodOrderCArd>
      ))}
    </div>
  );
};

export default FoodItems;

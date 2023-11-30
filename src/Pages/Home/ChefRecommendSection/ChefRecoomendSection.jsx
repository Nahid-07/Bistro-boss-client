import { useEffect } from "react";
import { useState } from "react";
import ChefRecommendCart from "../../../components/ChefRecommendCart/ChefRecommendCart";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";

const ChefRecoomendSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("menu.json").then((res) =>
      res.json().then((data) => {
        setMenuItems(data.slice(0,3))
      })
    );
  }, []);
  return (
    <div>
        <SectionHeader
            subHeader={"---Should Try---"}
            mainHeader={"CHEF RECOMMENDS"}
        ></SectionHeader>
        <div className="grid grid-cols-3 gap-5 mb-20 mt-10">
        {
            menuItems.map(salad => <ChefRecommendCart
                key={salad._id}
                salad={salad}
            ></ChefRecommendCart>)
        }
  </div>
    </div>
  );
};

export default ChefRecoomendSection;

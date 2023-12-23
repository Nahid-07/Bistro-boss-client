import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import ourshopBG from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodOrderCArd from "../../../components/foodOrderCard/FoodOrderCArd";
import FoodItems from "../foodItems/FoodItems";

const OurShop = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((drinks) => drinks.category === "drinks");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizza = menu.filter((pizza) => pizza.category === "pizza");
  const soup = menu.filter((soup) => soup.category === "soup");
  const salad = menu.filter((salad) => salad.category === "salad");
  return (
    <section>
      <MenuPageFeaturedSection
        headerMenuBG={ourshopBG}
        title={"OUR SHOP"}
        subDescription={"Would you like to try a dish?"}
      ></MenuPageFeaturedSection>
      <section className="max-w-7xl mx-auto">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <FoodItems
                item={salad}
            ></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems
                item={pizza}
            ></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems
                item={soup}
            ></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems
                item={desserts}
            ></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems
                item={drinks}
            ></FoodItems>
          </TabPanel>
        </Tabs>
      </section>
    </section>
  );
};

export default OurShop;

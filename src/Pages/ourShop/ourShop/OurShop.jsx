import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import ourshopBG from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OurShop = () => {
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
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </section>
  );
};

export default OurShop;

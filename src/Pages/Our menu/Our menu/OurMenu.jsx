import { Helmet } from "react-helmet-async";
import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import menuPageheaderBG from "../.././../assets/menu/banner3.jpg";
import dessertsBg from "../../../assets/menu/dessert-bg.jpeg";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import useMenu from "../../hooks/useMenu";
import Menu from "../../../components/menu/Menu";

const OurMenu = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((offer) => offer.category === "offered");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  console.log(todaysOffer);
  return (
    <main>
      <Helmet>
        <title>Bistro Boss-- Menu</title>
      </Helmet>
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={menuPageheaderBG}
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <SectionHeader
          subHeader={"---Don't miss---"}
          mainHeader={"TODAY'S OFFER"}
        ></SectionHeader>
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 mb-20">
          {todaysOffer.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
      {/* dessert */}
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={dessertsBg}
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <SectionHeader
          subHeader={"---Don't miss---"}
          mainHeader={"TODAY'S OFFER"}
        ></SectionHeader>
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 mb-20">
          {desserts.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurMenu;

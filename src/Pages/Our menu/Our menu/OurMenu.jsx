import { Helmet } from "react-helmet-async";
import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import menuPageheaderBG from "../.././../assets/menu/banner3.jpg";
import dessertsBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg"
import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import useMenu from "../../hooks/useMenu";
import Menu from "../../../components/menu/Menu";

const OurMenu = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((offer) => offer.category === "offered");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizza = menu.filter((pizza) => pizza.category === "pizza");
  const soup = menu.filter((soup) => soup.category === "soup");
  const salad = menu.filter((salad) => salad.category === "salad");
  console.log(todaysOffer);
  return (
    <main>
      <Helmet>
        <title>Bistro Boss-- Menu</title>
      </Helmet>
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={menuPageheaderBG}
          title={"OUR MENU"}
          subDescription={"Would you like to try a dish?"}
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <SectionHeader
          subHeader={"---Don't miss---"}
          mainHeader={"TODAY'S OFFER"}
        ></SectionHeader>
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 my-20">
          {todaysOffer.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
      {/* dessert */}
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={dessertsBg}
          title={"DESSERTS"}
          subDescription={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 my-20">
          {desserts.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
      {/* pizza */}
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={pizzaBg}
          title={"PIZZA"}
          subDescription={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 my-20">
          {pizza.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
      {/* soup */}
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={soupBg}
          title={"SOUP"}
          subDescription={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 my-20">
          {soup.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
      {/* salad */}
      <section>
        <MenuPageFeaturedSection
          headerMenuBG={saladBg}
          title={"SALAD"}
          subDescription={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuPageFeaturedSection>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 my-20">
          {salad.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurMenu;

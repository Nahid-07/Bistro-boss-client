import { Helmet } from "react-helmet-async";
import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import menuPageheaderBG from '../.././../assets/menu/banner3.jpg'

const OurMenu = () => {
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
    </main>
  );
};

export default OurMenu;

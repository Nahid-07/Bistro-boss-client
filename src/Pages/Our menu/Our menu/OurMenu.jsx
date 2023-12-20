import { Helmet } from "react-helmet-async";
import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import menuPageheaderBG from '../.././../assets/menu/banner3.jpg'
import SectionHeader from "../../../components/sectionHeader/sectionHeader";

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
      <section>
        <SectionHeader
          subHeader={"---Don't miss---"}
          mainHeader={"TODAY'S OFFER"}
        >

        </SectionHeader>
      </section>
    </main>
  );
};

export default OurMenu;

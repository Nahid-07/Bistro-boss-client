import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import contactUsBG from "../../../assets/contact/banner.jpg";
import { FaClock, FaPhone } from "react-icons/fa";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
  return (
    <section>
        <Helmet>
            <title>Bistro boss -- contact us</title>
        </Helmet>
      <div>
        <MenuPageFeaturedSection
          headerMenuBG={contactUsBG}
          title={"CONTACT US"}
          subDescription={"Would you like to try a new dish?"}
        ></MenuPageFeaturedSection>
      </div>
      <div className="px-2">
        <SectionHeader
          mainHeader={"OUR LOCATION"}
          subHeader={"---Visit Us---"}
        ></SectionHeader>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 px-2 lg:px-0">
        <div className="border-2 border-t-0">
          <div className="bg-[#D1A054] p-4 flex justify-center text-white lg:text-xl">
            <FaPhone />
          </div>
          <div className="bg-gray-200 p-4 text-center lg:text-xl m-2 h-32">
            <h3>PHONE</h3>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="border-2 border-t-0">
        <div className="bg-[#D1A054] p-4 flex justify-center text-white lg:text-xl">
        <IoLocationSharp />
          </div>
          <div className="bg-gray-200 p-4 text-center lg:text-xl m-2 h-32">
            <h3>ADDRESS</h3>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="border-2 border-t-0">
        <div className="bg-[#D1A054] p-4 flex justify-center text-white lg:text-xl">
        <FaClock />
          </div>
          <div className="bg-gray-200 p-4 text-center lg:text-xl m-2 h-32">
            <h3>WORKING HOURS</h3>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

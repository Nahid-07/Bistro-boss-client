import MenuPageFeaturedSection from "../../../components/MenuPageFeaturedSection/MenuPageFeaturedSection";
import contactUsBG from "../../../assets/contact/banner.jpg";
import { FaClock, FaPhone } from "react-icons/fa";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import ContactLocation from "../../../components/contact/ContactLocation";


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
      <ContactLocation></ContactLocation>
      <div className="max-w-7xl mx-auto mb-12">
        <SectionHeader
          mainHeader={'CONTACT FORM'}
          subHeader={'---Send Us a Message---'}
        ></SectionHeader>
      <div className="p-10 bg-gray-200 mt-20">
        <div>
          <label className="text-lg font-semibold" htmlFor="">
           Name
          </label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-full mr-5">
            <label className="text-lg font-semibold" htmlFor="">
              {" "}
              Phone
            </label>
            <br />
            <input className="input input-bordered w-full" type="text" />
          </div>
          <div className="w-full ml-5">
            <label className="text-lg font-semibold" htmlFor="">
              Email
            </label>
            <br />
            <input className="input input-bordered w-full" type="text" />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-lg font-semibold" htmlFor="">
            Message
          </label>{" "}
          <br />
          <textarea
            className="textarea textarea-bordered w-full"
            name=""
            id=""
          ></textarea>
        </div>
        <div>
          <button className="bg-[#D1A054] px-5 py-2 rounded-sm mt-5 text-white">
            Send message
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUs;

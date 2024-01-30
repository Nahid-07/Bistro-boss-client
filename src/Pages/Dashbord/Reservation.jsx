import { FaClock, FaPhone } from "react-icons/fa";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import { IoLocationSharp } from "react-icons/io5";
import ContactLocation from "../../components/contact/ContactLocation";

const Reservation = () => {
  return (
    <section className="lg:m-20 m-10">
      <SectionHeader
        mainHeader={"BOOK A TABLE"}
        subHeader={"---Reservation---"}
      ></SectionHeader>
      <div className="grid lg:grid-cols-3 gap-5 mb-10">
        <div>
          <label htmlFor="">Date*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div>
          <label htmlFor="">Time*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div>
          <label htmlFor="">Guest*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div>
          <label htmlFor="">Name*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div>
          <label htmlFor="">Phone*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div>
          <label htmlFor="">Email*</label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#835D23] px-5 py-2 text-white">Book a table</button>
      </div>
      <SectionHeader
        mainHeader={"OUR LOCATION"}
        subHeader={"------Visit Us------"}
      ></SectionHeader>
      <ContactLocation></ContactLocation>
    </section>
  );
};

export default Reservation;

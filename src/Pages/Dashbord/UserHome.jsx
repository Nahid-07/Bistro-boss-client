import { FaPhoneAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";

const UserHome = () => {
  return (
    <section className="md:mx-10 mx-5">
      <h3 className="text-4xl font-semibold mb-5">Hi Welcome back!!</h3>
      <div className="md:flex justify-between gap-3">
        <div className="flex items-center justify-center bg-[#E711FD] text-white md:w-[398px] py-10 rounded">
          <div className="mr-10 text-6xl">
            <GiShoppingBag />
          </div>
          <div className="text-3xl">
            <p>205</p>
            <p>Menu</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#D3A256] text-white my-5 md:my-0 md:w-[398px] py-10 rounded">
          <div className="mr-10 text-6xl">
            <MdHomeFilled />
          </div>
          <div className="text-3xl">
            <p>205</p>
            <p>Menu</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#FE4880] text-white md:w-[398px] py-10 rounded">
          <div className="mr-10 text-6xl">
            <FaPhoneAlt />
          </div>
          <div className="text-3xl">
            <p>205</p>
            <p>Menu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;

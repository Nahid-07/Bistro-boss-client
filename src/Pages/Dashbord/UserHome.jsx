import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosStar, IoMdCart } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";

const UserHome = () => {
  return (
    <section className="md:mx-10 mx-5">
      <h3 className="text-4xl font-semibold mb-5">Hi Welcome back!!!</h3>
      <div className="md:flex justify-between gap-3 mb-10">
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
      {/* USER NAME */}
      <div className="md:flex space-y-10 md:space-y-0">
        <div className="bg-[#FFEDD5] flex justify-center flex-col items-center md:w-1/2 py-8">
          <div className="md:w-[300px] md:h-[300px] w-[150px] h-[150px] rounded-full border-2 border-[#D3A256] bg-white"></div>
          <h1 className="text-4xl font-semibold">Awlad Hossain</h1>
        </div>
        <div className="bg-[#FEF9C3] flex justify-center flex-col items-center md:w-1/2 py-8">
          <div>
          <h1 className="text-4xl mb-5">Your Activitiesa</h1>
          <div>
            <div className="flex items-center text-xl">
              <IoMdCart />
              <h4> Orders: 6</h4>
            </div>
            <div className="flex items-center text-xl">
              <IoIosStar />
              <h4>Reviews: 2</h4>
            </div>
            <div className="flex items-center text-xl">
              <FaCalendarAlt />
              <h4> Bookings: 2</h4>
            </div>
            <div className="flex items-center text-xl">
              <GiShoppingBag />
              <h4>Payment:3</h4>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;

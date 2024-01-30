import { FaStar } from "react-icons/fa";

const AddReview = () => {
  return (
    <section className="bg-gray-200 mt-20">
      <div className="pt-10">
        <h1 className="text-4xl font-bold text-center ">Rate Us!!!</h1>
        <div className="flex justify-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="p-10 lg:m-20">
        <div>
          <label className="text-lg font-semibold" htmlFor="">
          Which recipe you liked most?
          </label>
          <br />
          <input className="input input-bordered lg:w-1/2" type="text" />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-full mr-5">
            <label className="text-lg font-semibold" htmlFor="">
              {" "}
              Do you have any suggestion for us?
            </label>
            <br />
            <input className="input input-bordered lg:w-1/2" type="text" />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-lg font-semibold" htmlFor="">
          Kindly express your care in a short way.
          </label>{" "}
          <br />
          <textarea
            className="textarea textarea-bordered lg:w-1/2"
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
    </section>
  );
};

export default AddReview;

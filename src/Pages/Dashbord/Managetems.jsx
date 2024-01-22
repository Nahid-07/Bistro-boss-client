import SectionHeader from "../../components/sectionHeader/sectionHeader";

const ManageItems = () => {
  return (
    <div className="">
      <SectionHeader
        mainHeader={"Update ITEM"}
      ></SectionHeader>
      <div className="lg:w-1/2 mx-auto p-10 bg-slate-200 mt-20">
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Racipe Name
          </label>
          <br />
          <input className="input input-bordered w-full" type="text" />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-full mr-5">
            <label className="text-lg font-semibold" htmlFor="">
              {" "}
              Category
            </label>
            <br />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="w-full ml-5">
            <label className="text-lg font-semibold" htmlFor="">
              Price
            </label>
            <br />
            <input className="input input-bordered w-full" type="text" />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-lg font-semibold" htmlFor="">
            Racipe details
          </label>{" "}
          <br />
          <textarea
            className="textarea textarea-bordered w-full"
            name=""
            id=""
          ></textarea>
        </div>
        <div className="mt-5">
          <input type="file" name="" id="" />
        </div>
        <div>
          <button className="bg-[#D1A054] px-5 py-2 rounded-sm mt-5">
            Update Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

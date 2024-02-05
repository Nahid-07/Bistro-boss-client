import { useForm } from "react-hook-form";
import SectionHeader from "../../components/sectionHeader/sectionHeader";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }
  return (
    <div className="">
      <SectionHeader
        subHeader={"---What's new?---"}
        mainHeader={"ADD AN ITEM"}
      ></SectionHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 mx-auto p-10 bg-slate-200 mt-20">
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Racipe Name
          </label>
          <br />
          <input {...register("name", { required: true })} className="input input-bordered w-full" type="text" />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-full mr-5">
            <label className="text-lg font-semibold" htmlFor="">
              {" "}
              Category
            </label>
            <br />
            <select {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
              <option selected>
               salad
              </option>
              <option>soup</option>
              <option>dessert</option>
              <option>popular</option>
              <option>pizza</option>
              <option>offered</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="w-full ml-5">
            <label className="text-lg font-semibold" htmlFor="">
              Price
            </label>
            <br />
            <input {...register("price", { required: true })} className="input input-bordered w-full" type="text" />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-lg font-semibold" htmlFor="">
            Racipe details
          </label>{" "}
          <br />
          <textarea
          {...register("recipe", {required: true})}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div className="mt-5">
          <input type="file" name="" id="" />
        </div>
        <div>
          <button className="bg-[#D1A054] px-5 py-2 rounded-sm mt-5">
            Add Items
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;

import Swal from "sweetalert2";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {reset} = useForm()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const priceFloat = parseFloat(price);
    const recipe = e.target.recipe.value;
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.data.display_url;
        const menuData = { name, category, price: priceFloat, recipe, image };
        fetch("https://bistro-boss-server-lilac-iota.vercel.app/add-items", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(menuData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId)
            Swal.fire({
              title: "Good job!",
              text: "Item has been added",
              icon: "success"
            });
            reset()
          });
      });
  };
  return (
    <div className="">
      <SectionHeader
        subHeader={"---What's new?---"}
        mainHeader={"ADD AN ITEM"}
      ></SectionHeader>
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 mx-auto p-10 bg-slate-200 mt-20"
      >
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Racipe Name
          </label>
          <br />
          <input
            name="name"
            className="input input-bordered w-full"
            type="text"
          />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-full mr-5">
            <label className="text-lg font-semibold" htmlFor="">
              {" "}
              Category
            </label>
            <br />
            <select
              name="category"
              className="select select-bordered w-full max-w-xs"
            >
              <option>salad</option>
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
            <input
              name="price"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-lg font-semibold" htmlFor="">
            Racipe details
          </label>{" "}
          <br />
          <textarea
            name="recipe"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div className="mt-5">
          <input type="file" name="image" id="" />
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

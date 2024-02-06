import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cartItem, refetch] = useCart();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-lilac-iota.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="p-10">
      <Helmet>
        <title>Bistro Boss-- mycart</title>
      </Helmet>
      <div className="md:flex space-y-3 justify-between">
        <h1 className="md:text-4xl font-bold">
          Total Orders: {cartItem.length}
        </h1>
        <h1 className="md:text-4xl font-bold">
          Total Price: $
          {cartItem.reduce((sum, item) => item.foodPrice + sum, 0)}
        </h1>
        <div>
          <button className="bg-[#D1A054] px-5 py-2 text-white text-lg rounded-md">
            Pay
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg font-semibold">
              {cartItem.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.foodImage} alt="food image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.foodName}</td>

                  <td>{item.foodPrice}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 px-2 py-1 text-white rounded-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

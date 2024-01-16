import useCart from "../hooks/useCart";

const MyCart = () => {
  const [cartItem] = useCart();
  return (
    <div className="p-10">
        <div className="md:flex space-y-3 justify-between">
            <h1 className="md:text-4xl font-bold">Total Orders: {cartItem.length}</h1>
            <h1 className="md:text-4xl font-bold">Total Price: ${
                cartItem.reduce((sum,item) => item.foodPrice + sum,0)
            }</h1>
            <div>
                <button className="bg-[#D1A054] px-5 py-2 text-white text-lg rounded-md">Pay</button>
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
                    <button className="bg-red-600 px-2 py-1 text-white rounded-sm">Delete</button>
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

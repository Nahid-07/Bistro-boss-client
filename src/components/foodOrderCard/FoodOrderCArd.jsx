import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodOrderCArd = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const orderItmes = {
        foodName: item.name,
        foodPrice: item.price,
        foodId: item._id,
        userEmail: user.email,
        userName: user.displayName,
      };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItmes),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added to the cart",
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have to login first",
        text: "Are you sure you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          (navigate("/login", { state: { from: location } }))
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" className="rounded-xl" />
      </figure>
      <p className="bg-black text-white absolute right-0 m-5 px-3 py-2 opacity-70 rounded-md">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-indigo-600 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderCArd;

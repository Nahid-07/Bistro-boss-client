import { Link } from "react-router-dom";
import useCart from "../../Pages/hooks/useCart";
import CartItems from "./CartItems";

const CartSidebar = ({ isOpen }) => {
  const [cartItems] = useCart();
  return (
    <>
      {isOpen && (
        <div
          className={`h-screen w-[300px] z-10 absolute bg-black ${
            isOpen === false ? "right-[5000px]" : "right-0"
          } p-5 opacity-70`}
        >
          <div className="space-y-2">
            {cartItems.map((cartItem) => (
              <CartItems key={cartItem._id} cartItem={cartItem}></CartItems>
            ))}
          </div>
          <div className="mt-5">
            <Link to='/dashbord'><button className="bg-indigo-600 text-white w-full p-3 rounded">checkout</button></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;

import useCart from "../../Pages/hooks/useCart";
import CartItems from "./CartItems";

const CartSidebar = ({ isOpen }) => {
    const [cartItems] = useCart()
  return (
    <>
      {isOpen && (
        <div
          className={`h-screen w-[300px] z-10 absolute bg-black ${
            isOpen === false ? "right-[5000px]" : "right-0"
          } p-5 opacity-70`}
        >
          <div className="space-y-2">
            {
                cartItems.map(cartItem => <CartItems
                    key={cartItem._id}
                    cartItem={cartItem}
                ></CartItems>)
            }
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;

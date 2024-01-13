

const CartSidebar = ({isOpen}) => {
    return (
        <>
            {
                isOpen && 
                <div className={`h-screen w-[300px] z-10 absolute bg-black ${isOpen === false ? 'right-[5000px]': "right-0"} px-5 opacity-70`}>
                sidebar
                </div>
            }
        </>
    );
};

export default CartSidebar;
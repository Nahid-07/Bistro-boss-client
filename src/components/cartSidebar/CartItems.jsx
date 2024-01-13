import React, { useState } from 'react';


const CartItems = ({cartItem}) => {
    const [quantity, setQuantity] = useState(1);
    const {foodImage, foodName, foodPrice} = cartItem;
    return (
        <div className='flex justify-between items-center p-2 rounded bg-white'>
            <div className='w-10'>
                <img src={foodImage} alt="" />
            </div>
            <p>{foodName}</p>
            <p>${foodPrice}</p>
            <div className='border'>
                <button className='border p-1' onClick={()=> setQuantity(quantity+1)}>+</button>
                <span className='mx-2'>{quantity}</span>
                <button className='border p-1' onClick={()=> setQuantity(quantity-1)}>-</button>
            </div>
        </div>
    );
};

export default CartItems;
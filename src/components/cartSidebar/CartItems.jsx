import React, { useState } from 'react';


const CartItems = ({cartItem}) => {
    const {foodImage, foodName, foodPrice} = cartItem;
    return (
        <div className='flex justify-between items-center p-2 rounded bg-white'>
            <div className='w-10'>
                <img src={foodImage} alt="" />
            </div>
            <p>{foodName}</p>
            <p>${foodPrice}</p>
        </div>
    );
};

export default CartItems;
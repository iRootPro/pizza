import React from "react";

const TotalOrder = ({size, dough, sauce, cheese, vegetables, meat, totalPrice}: propsType) => {
    return (
        <div>
            <h3>Your order:</h3>
            {size && <div>Size: {size}</div>}
            {dough && <div>Dough: {dough}</div>}
            {sauce && <div>Sauce: {sauce}</div>}
            {cheese.length > 0 && <div>Cheese: {cheese.join(', ')}</div>}
            {vegetables.length > 0 && <div>Vegetables: {vegetables.join(', ')}</div>}
            {meat.length > 0 && <div>Meat: {meat.join(', ')}</div>}
            <br/>
            <div>Money: {totalPrice}</div>
        </div>
    );
};

export default TotalOrder;

type propsType = {
    size: string
    dough: string
    sauce: string | null
    cheese: Array<string>
    vegetables: Array<string>
    meat: Array<string>
    totalPrice: number
}

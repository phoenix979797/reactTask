import React from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends React.Component {
    state = {
        cartItems: [
            {
                id: '1',
                name: 'iPhone 11',
                price: 999,
            },
            {
                id: '2',
                name: 'iPhone 11 pro',
                price: 1299,
            },
            {
                id: '3',
                name: 'iPhone 12 pro',
                price: 1450,
            }
        ]
    }
    render() {
        const count = this.state.cartItems.length;
        return (
            <div className="column">
                <CartTitle userName={this.props.userName} count={count} />
                <ProductsList cartItems={this.state.cartItems} />
            </div>
        );
    }
}


export default ShoppingCart;
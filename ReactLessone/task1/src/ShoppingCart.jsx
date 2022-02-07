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
        ]
    }
    render() {
        const { cartItems } = this.state;
        return (
            <div className="column">
                <CartTitle
                    userName={this.props.userData.firstName}
                    count={cartItems.length}
                />
                <ProductsList cartItems={cartItems} />
            </div>
        )
    }
}

export default ShoppingCart;
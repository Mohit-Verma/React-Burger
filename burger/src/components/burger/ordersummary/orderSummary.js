import React, { Component } from 'react';
import { button as Button } from './../../ui/button/button';

class OrderSummary extends Component {

    render() {

        const summary = (this.props.ingredients) ? (Object.keys(this.props.ingredients).map(ing => {
            return (<li key={ing}>
                <span> {ing} </span>: {this.props.ingredients[ing]}
            </li>);
        })) : null;

        return (
            <React.Fragment>
                <h3> Your Order Summary </h3>
                <p> A delicious burger with following ingredients </p>
                <ul>
                    {summary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p> Continue to Checkout?</p>
                <Button actionType="success" clickAction={this.props.proceedPurchase}>CONTINUE</Button>
                <Button actionType="danger" clickAction={this.props.cancelPurchase}>CANCEL</Button>
            </React.Fragment>
        );
    }
}

export default OrderSummary;
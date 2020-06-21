import React, { Component } from 'react';
import { burger as Burger } from './../../components/burger/burger';
import { buildControls as BuildControls } from './../../components/burger/buildcontrols/buildControls';
import Modal from '../../components/ui/modal/modal';
import OrderSummary from '../../components/burger/ordersummary/orderSummary';
import { serverInstance as Axios } from '../../serverInstance';
import { spinner as Spinner } from '../../components/ui/spinner/spinner';
import { errorHandler as ErrorHandler } from '../../handler/error/errorHandler';

const INGREDIENT_PRICE = {
    salad: 0.3,
    wafer: 0.5,
    cheese: 0.6,
    patties: 2
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        controls: [
            { label: 'Salad', type: 'salad', count: 0 },
            { label: 'Wafer', type: 'wafer', count: 0 },
            { label: 'Cheese', type: 'cheese', count: 0 },
            { label: 'Patties', type: 'patties', count: 0 },
        ],
        baseAmount: 4.0,
        amount: 0.0,
        puschasable: false,
        displayOrderSummary: false,
        loading: false,
        error: false
    };

    componentWillMount() {
        Axios.get('https://react-my-burger-f87af.firebaseio.com/ingredients.json').then(response => {
            const ingredients = response.data;
            this.setState({ ingredients });
        }).catch(error => {
            this.setState({ error: true });
            console.log(error);
        });
    }

    isPurchasable(amount) {
        return (amount) ? true : false;
    }

    addIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients };
        const amount = this.state.amount + INGREDIENT_PRICE[type];
        const puschasable = this.isPurchasable(amount);
        const controls = this.state.controls.map(elem => {
            return {
                label: elem.label,
                type: elem.type,
                count: (type === elem.type) ? elem.count + 1 : elem.count
            };
        });
        ingredients[type]++;
        this.setState({ ingredients, amount, controls, puschasable });
    };

    removeIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients };
        const amount = this.state.amount - INGREDIENT_PRICE[type];
        const puschasable = this.isPurchasable(amount);
        const controls = this.state.controls.map(elem => {
            return {
                label: elem.label,
                type: elem.type,
                count: (type === elem.type) ? elem.count - 1 : elem.count
            };
        });
        ingredients[type]--;
        if (this.state.ingredients[type])
            this.setState({ ingredients, amount, controls, puschasable });
        else
            alert(`Selected ingredient is not yet added!`);
    };

    orderSummaryViewHandler = () => {
        this.setState({ displayOrderSummary: true });
    };

    closeOrderSummaryViewHandler = () => {
        this.setState({ displayOrderSummary: false });
    };

    puschaseHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.baseAmount + this.state.amount + '$',
            customer: {
                name: 'MSVerma',
                address: {
                    street: 'street',
                    zipcode: '123456',
                    country: 'country'
                },
                email: 'test@test.com',
                delivery: 'drone_mode',
                payment: 'online_mode'
            }
        }
        Axios.post('/orders.json', order).then(response => {
            console.log(response);
            const ingredients = {...this.state.ingredients};
            for(let item in ingredients) {
                ingredients[item] = 0;
            }
            this.setState({
                displayOrderSummary: false,
                loading: false,
                ingredients,
                amount: 0.0,
                puschasable: false
            });
            alert('Thankyou for placing an order. We will let you know once it is ready!');
        }).catch(exception => {
            console.log(exception);
            this.setState({ displayOrderSummary: false, loading: false });
            alert('Something went wrong!');
        });
    };

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.displayOrderSummary}
                    closeModal={this.closeOrderSummaryViewHandler}>
                    {(this.state.loading) ? (<Spinner />) : (
                        <OrderSummary ingredients={this.state.ingredients}
                            totalPrice={this.state.baseAmount + this.state.amount}
                            cancelPurchase={this.closeOrderSummaryViewHandler}
                            proceedPurchase={this.puschaseHandler} />
                    )}
                </Modal>
                {this.state.ingredients ? (
                    <React.Fragment>
                        <Burger ingredients={{ ...this.state.ingredients }}></Burger>
                        <BuildControls
                            totalPrice={this.state.baseAmount + this.state.amount}
                            controls={[...this.state.controls]}
                            addIngredient={this.addIngredientHandler}
                            removeIngredient={this.removeIngredientHandler}
                            purchasable={this.state.puschasable}
                            orderProduct={this.orderSummaryViewHandler}>
                        </BuildControls>
                    </React.Fragment>) : (
                        this.state.error ? (
                            <React.Fragment>
                                <p style={{ fontWeight: 'bold', textAlign: 'center', color:'red' }}> Something went wrong! </p>
                                <p style={{ fontWeight: 'bold', textAlign: 'center', color:'red' }}> Refresh the page to try again! </p>
                                <Spinner />
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <p style={{ fontWeight: 'bold', textAlign: 'center' }}> Fetching ingredients! </p>
                                <Spinner />
                            </React.Fragment>
                        )
                    )
                }
            </React.Fragment>
        );
    }
}

export default ErrorHandler(BurgerBuilder, Axios);
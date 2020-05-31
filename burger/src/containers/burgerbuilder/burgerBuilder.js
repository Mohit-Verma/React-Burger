import React, { Component } from 'react';
import { burger as Burger } from './../../components/burger/burger';
import { buildControls as BuildControls } from './../../components/burger/buildcontrols/buildControls'; 

const INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 0.5,
    cheese: 0.6,
    patties: 2
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            patties: 0
        }, controls: [
            {label: 'Salad', type: 'salad', count: 0},
            {label: 'Bacon', type: 'bacon', count: 0},
            {label: 'Cheese', type: 'cheese', count: 0},
            {label: 'Patties', type: 'patties', count: 0},
        ],
        baseAmount: 4.0,
        amount: 0.0
    }

    addIngredientHandler =(type) => {
        const ingredients = {...this.state.ingredients};
        const amount = this.state.amount + INGREDIENT_PRICE[type];
        const controls = this.state.controls.map(elem => {
            return {
                label: elem.label,
                type: elem.type,
                count: (type === elem.type)? elem.count+1: elem.count
            };
        });
        ingredients[type]++;
        this.setState({ingredients, amount, controls});
    }

    removeIngredientHandler =(type) => {
        const ingredients = {...this.state.ingredients};
        const amount = this.state.amount - INGREDIENT_PRICE[type];
        const controls = this.state.controls.map(elem => {
            return {
                label: elem.label,
                type: elem.type,
                count: (type === elem.type)? elem.count-1: elem.count
            };
        });
        ingredients[type]--;
        if(this.state.ingredients[type] > 0)
            this.setState({ingredients, amount, controls});
        else
            alert(`Selected ingredient is not yet added!`);
    }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={{...this.state.ingredients}}></Burger>
                <BuildControls 
                    totalPrice={this.state.baseAmount + this.state.amount}
                    controls={[...this.state.controls]}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}></BuildControls>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
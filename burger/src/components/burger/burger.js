import React from 'react';
import { ingredient as Ingredient } from './ingredient/ingredient';
import classes from './burger.module.css';

export const burger = (props) => {
    let compKey = 0;
    let ingredients = (<p> Start adding ingredient to your burger </p>);
    const data = [];
    
    Object.keys(props.ingredients).map(ing => {
        [...Array(props.ingredients[ing])].map(elem => {
            data.push(ing);
            return undefined;
        });
        return undefined;
    });
    
    if(data.length > 0) 
        ingredients = data.map(elem => <Ingredient key={compKey++} type={elem}></Ingredient>);

    return (
        <div className={classes.burger}>
            <Ingredient type="breadTop"></Ingredient>
            {ingredients}
            <Ingredient type="breadBottom"></Ingredient>
        </div>
    );
}
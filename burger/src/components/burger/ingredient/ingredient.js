import React from 'react';
import classes from './ingredient.module.css';

export const ingredient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case('breadTop') :
            ingredient = (<div className={classes[props.type]}>
                <div className={classes.seeds1}></div>
                <div className={classes.seeds2}></div>
            </div>);
            break;
        default:
            if(classes[props.type])
                ingredient = <div className={classes[props.type]}></div>
            break;
    }
    return ingredient;
};
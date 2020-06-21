import React from 'react';
import { buildControl as BuildControl } from './buildcontrol/buildControl';
import classes from './buildControls.module.css';

export const buildControls = (props) => (
    <div className={classes.buildControls}>
        <p>Total Amount: {props.totalPrice.toFixed(2)}</p>
        {props.controls.map(control => <BuildControl 
            key={control.type} 
            label={control.label}
            disabled={control.count <= 0}
            add={() => props.addIngredient(control.type)}
            remove={() => props.removeIngredient(control.type)}></BuildControl>)
        }
        <button
            className={classes.orderButton}
            disabled={!props.purchasable}
            onClick={props.orderProduct}>ORDER NOW</button>
    </div>
);
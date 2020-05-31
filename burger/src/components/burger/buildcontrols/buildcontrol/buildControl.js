import React from 'react';
import classes from './buildControl.module.css';

export const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{ props.label }</div>
        <button className={classes.add} onClick={props.add}>+</button>
        <button 
            className={classes.remove} 
            onClick={props.remove} 
            disabled={props.disabled}>-</button>
    </div>
);
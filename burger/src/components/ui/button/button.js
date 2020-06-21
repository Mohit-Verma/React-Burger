import React from 'react';
import classes from './button.module.css';

export const button = (props) => (
    <button className={[classes.button, classes[props.actionType]].join(' ')}
        onClick={props.clickAction}>
        {props.children}
    </button>
);

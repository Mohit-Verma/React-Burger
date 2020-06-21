import React from 'react';
import classes from './toggler.module.css';

export const toggler = (props) => (
    <div className={classes.toggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
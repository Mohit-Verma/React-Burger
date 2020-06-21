import React from 'react';
import classes from './navigationItem.module.css';

export const navigationItem = (props) => (
    <li className={classes.navigationItem}>
        <a href={props.url}
            className={props.active? classes.active: null}> {props.children} </a>
    </li>
);
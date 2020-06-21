import React from 'react';
import classes from './logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

export const logo = (props) => (
    <div className={classes.logo}>
        <img src={burgerLogo} alt="Burger"></img>
    </div>
);
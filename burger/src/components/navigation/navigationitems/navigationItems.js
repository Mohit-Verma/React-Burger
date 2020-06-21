import React from 'react';
import { navigationItem as NavigationItem } from './navigationitem/navigationItem';
import classes from './navigationItems.module.css';

export const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem url="/" active> Burger Builder </NavigationItem>
        <NavigationItem url="/"> Checkout </NavigationItem>
    </ul>
);
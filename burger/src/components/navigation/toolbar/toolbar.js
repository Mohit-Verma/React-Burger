import React from 'react';
import { navigationItems as NavigationItems } from './../navigationitems/navigationItems';
import { logo as Logo } from '../../logo/logo';
import { toggler as Toggler} from '../../sidedrawer/toggler/toggler';
import classes from './toolbar.module.css';

export const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.mobileOnly}>
            <Toggler clicked={props.visibilityHandler}/>
        </div>
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);
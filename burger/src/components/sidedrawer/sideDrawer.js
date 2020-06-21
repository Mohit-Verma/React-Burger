import React from 'react';
import { logo as Logo } from './../logo/logo';
import { navigationItems as NavigationItems } from './../navigation/navigationitems/navigationItems';
import { backDrop as BackDrop } from './../ui/backdrop/backdrop';
import classes from './sideDrawer.module.css';

export const sideDrawer = (props) => {
    const attachedClasses = props.show ?
        [classes.sideDrawer, classes.open] : [classes.sideDrawer, classes.close];

    return (
        <React.Fragment>
            <div className={classes.backDrop}>
                <BackDrop
                    show={props.show}
                    clicked={props.visibilityHandler} />
            </div>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </React.Fragment>
    );
};
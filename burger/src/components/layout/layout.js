import React from 'react';
import classes from './layout.module.css'

export const layout = ( props ) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.content}>
            { props.children }
        </main>
    </React.Fragment>
);
import React from 'react';
import classes from './backdrop.module.css'

export const backDrop = (props) => (
    props.show? (
        <div className={classes.backDrop}
            onClick={props.clicked}>

        </div>
    ): null
);
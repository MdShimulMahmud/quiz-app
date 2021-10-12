import React from 'react';
import classes from './Illustration.module.css';

export default function Illustration({ image }) {
    return (
        <div className={classes.illustration}>
            <img src={image} alt="login" />
        </div>
    );
}

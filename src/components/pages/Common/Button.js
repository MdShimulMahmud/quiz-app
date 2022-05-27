import React from 'react';
import classes from './Button.module.css';

export default function Button({ className, children }) {
    return (
        <button type="button" className={`${classes.button} ${className}`}>
            {children}
        </button>
    );
}

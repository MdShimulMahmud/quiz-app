import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5
import Button from '../Common/Button';
import classes from './Progressbar.module.css';

export default function Progressbar() {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>24% Cimplete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: '20%' }} />
                </div>
            </div>
<<<<<<< HEAD
            <Link to="/result">
=======
            <a href="result.html">
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5
                <Button className={`${classes.next}`}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined">arrow_forward</span>
                </Button>
<<<<<<< HEAD
            </Link>
=======
            </a>
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5
        </div>
    );
}

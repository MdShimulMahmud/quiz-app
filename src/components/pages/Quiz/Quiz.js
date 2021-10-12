import React from 'react';
import Answers from './Answers';
import classes from './Answers.module.css';
import MiniPlayer from './MiniPlayer';
import Progressbar from './Progressbar';

export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <div className={classes.answers}>
                <Answers />
                <Progressbar />
                <MiniPlayer />
            </div>
        </>
    );
}

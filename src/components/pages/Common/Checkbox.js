import React from 'react';

export default function Checkbox({ className, text }) {
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={className}>
            <input type="checkbox" /> <span>{text}</span>
        </label>
    );
}

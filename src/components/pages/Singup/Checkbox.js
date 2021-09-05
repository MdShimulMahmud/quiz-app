import React from 'react';

export default function Checkbox({ text }) {
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>
            <input type="checkbox" /> <span>{text}</span>
        </label>
    );
}

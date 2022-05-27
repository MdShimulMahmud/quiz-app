import React from 'react';
import signupImage from '../../../assets/images/signup.svg';
import Illustration from '../Common/Illustration';
import SignUpForm from './SignUpForm';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage} />
                <SignUpForm />
            </div>
        </>
    );
}

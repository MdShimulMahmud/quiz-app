import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5
import signupImage from '../../../assets/images/signup.svg';
import Button from '../Common/Button';
import Checkbox from '../Common/Checkbox';
import Form from '../Common/Form';
import Illustration from '../Common/Illustration';
import TextInput from '../Common/TextInput';
import classes from './Singup.module.css';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage} />
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />

                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />

                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../assets/images/login.svg';
import Button from '../Common/Button';
import Form from '../Common/Form';
import Illustration from '../Common/Illustration';
import TextInput from '../Common/TextInput';
import classes from './Login.module.css';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} />
                <Form className={`${classes.login}`}>
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <Button>Submit Now</Button>

                    <div className="info">
                        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

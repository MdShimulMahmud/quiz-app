import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.production.min';
import { useAuth } from '../../../contexts/AuthContext';
import Button from '../Common/Button';
import Checkbox from '../Common/Checkbox';
import Form from '../Common/Form';
import TextInput from '../Common/TextInput';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setSetConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();

    const history = useHistory();

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Password don't matched!");
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to create an account!');
        }
    }

    <Form onSubmit={handleSubmit} style={{ height: '750px' }}>
        <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
            value={username}
            onClick={(e) => setUsername(e.target.value)}
            required
        />

        <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onClick={(e) => setEmail(e.target.value)}
            required
        />

        <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onClick={(e) => setPassword(e.target.value)}
            required
        />

        <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            onClick={(e) => setSetConfirmPassword(e.target.value)}
            required
        />

        <Checkbox
            text="I agree to the Terms &amp; Conditions"
            value={agreed}
            onClick={(e) => setAgreed(e.target.value)}
            required
        />

        <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
        </div>
    </Form>;
};

export default SignUpForm;

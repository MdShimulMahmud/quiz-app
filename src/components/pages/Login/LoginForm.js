import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.production.min';
import { useAuth } from '../../../contexts/AuthContext';
import Button from '../Common/Button';
import Form from '../Common/Form';
import TextInput from '../Common/TextInput';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to login!');
        }
    }

    return (
        <Form onSubmit={handleSubmit} className={{ height: '330px' }}>
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

            <Button type="button" disabled={loading}>
                Submit Now
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don&apos;t have an account? <Link to="/signup">Signup</Link> instead. Don&apos;t
                have an account? <a href="signup.html">Signup</a> instead.
            </div>
        </Form>
    );
};

export default LoginForm;

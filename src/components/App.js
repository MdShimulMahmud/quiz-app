import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Signup from './pages/Singup/Signup';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/quiz" component={Quiz} />
                            <Route exact path="/result" component={Result} />
                        </Switch>
                    </Layout>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;

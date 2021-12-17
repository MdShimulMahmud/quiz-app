import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Signup from './pages/Singup/Signup';
=======
import Quiz from './pages/Quiz/Quiz';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import Signup from './pages/Singup/Signup';
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/result" component={Result} />
                    </Switch>
                </Layout>
            </Router>
=======
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                {/* <Login /> */}
                <Quiz />
            </Layout>
>>>>>>> f59c9772610d8a7f47c20299fc4be75ad8e636c5
        </div>
    );
}

export default App;

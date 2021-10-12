import '../styles/App.css';
import Layout from './Layout';
import Quiz from './pages/Quiz/Quiz';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import Signup from './pages/Singup/Signup';

function App() {
    return (
        <div className="App">
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                {/* <Login /> */}
                <Quiz />
            </Layout>
        </div>
    );
}

export default App;

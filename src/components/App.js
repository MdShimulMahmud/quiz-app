import '../styles/App.css';
import Layout from './Layout';
// import Home from './pages/Home/Home';
import Signup from './pages/Singup/Signup';

function App() {
    return (
        <div className="App">
            <Layout>
                {/* <Home /> */}
                <Signup />
            </Layout>
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <div>
                    Learn <code>React</code>
                </div>
            </header>
            <Form />
        </div>
    );
}

export default App;

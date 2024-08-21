import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type='email' name="email" id="email" />
        <label htmlFor='password'>password</label>
        <input type="password" name="password" id="password" />
        <button type='submit'>OK</button>
      </div>

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div >
  );
}

export default App;

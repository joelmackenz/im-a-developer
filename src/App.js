import './App.css';
import Main from './components/main.js';
import MakeYourOwn from './components/make-your-own';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ever wanted to feel like a developer? <br />
          Impress your friends with skills so fresh no one's heard of them.
        </p>
        <Main />
        <MakeYourOwn />
      </header>
    </div>
  );
}

export default App;

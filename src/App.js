import './App.css';
import Clock from './components/clock/clock';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>UTC CLOCKS</h1>
      </header>
      <main>
        <Clock timeZone={"Europe/Kiev"} />
      </main>
      <footer>
        <p>Sponsored by new Date().com</p>
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import ClockContainer from './components/clocks-container';

function App() {
  const timeZones = [
    "Europe/London",
    "Europe/Kiev",
    "Europe/Moscow"
  ]
  return (
    <div className="App">
      <header className="app-header">
        <h1>UTC CLOCKS</h1>
      </header>
      <main>
        <ClockContainer timeZones={timeZones} />
      </main>
      <footer>
        <p>Sponsored by new Date().com</p>
      </footer>
    </div>
  );
}

export default App;

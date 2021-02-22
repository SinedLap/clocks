import './App.css';
import ClockContainer from './components/clocks-container';

//https://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/rrun_svr_timezones.html

function App() {
  const timeZones = [
    "Europe/London",
    "Europe/Kiev",
    "Europe/Moscow",
    "America/Port_of_Spain"
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

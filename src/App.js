import logo from './logo.png';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">
          Under Construction! Stay tuned...
        </p>
        
      </header>
    </div>
  );
}





export default App;

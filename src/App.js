import './App.css';
import Cmpone from './components/Cmpone'; // ✅ Correct import
import Cmptwo from './components/Cmptwo'; // ✅ Correct import
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-wrapper">
          <nav className="navbar">
            <Link to="/home">Home</Link>
            {/* <Link to="/">Home</Link> */}
          </nav>

          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Cmpone />} />
               <Route path="/home" element={<Cmptwo />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h2>checkout</h2>} />
          <Route path="/login" element={<h2>login Page</h2>} />
          <Route path="/" element={<Header />} />
          <Route path="*" element={<h2>Dummy🤡</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

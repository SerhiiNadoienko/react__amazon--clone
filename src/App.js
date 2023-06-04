import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home } from './components';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<h2>checkout</h2>} />
          <Route path="/login" element={<h2>login Page</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>Dummy🤡</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

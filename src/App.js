import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

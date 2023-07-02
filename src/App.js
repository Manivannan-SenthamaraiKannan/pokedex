import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Components/Main';
import PokeDetails from './Components/PokeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/pokedetails' element={<PokeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

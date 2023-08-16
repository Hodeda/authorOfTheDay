import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Favorites from './components/Favorites/Favorites';
import Generators from './components/Generators/Generators';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/generators' element={<Generators/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

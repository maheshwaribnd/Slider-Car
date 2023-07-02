import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import HomePage from './Components/Home';
import Profile from './Components/Profile';
import Navigation from './Components/Navigate';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

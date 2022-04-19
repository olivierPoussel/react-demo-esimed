import logo from './logo.svg';
import './App.css';
import Header from './components/common/header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import DetailFilm from './pages/detailFilm';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/film/:id' element={<DetailFilm />} />
        </Routes>
      </main>

      <footer>
        <p>mon footer</p>
      </footer>
    </>


  );
}

export default App;

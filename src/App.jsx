import './App.css';
import Header from './components/common/header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import DetailFilm from './pages/detailFilm';
import Films from './pages/films';
import Acteurs from './pages/acteurs';
import Seance from './pages/seance';
import Seances from './pages/Seances';
import Login from './pages/login';
import React, { useState } from 'react';
import { UserContext, contextPrototype } from './service/userContextService';
import { getLocalStorage, USER_KEY } from './service/localStorageService';
import CreateFilm from './pages/admin/createFilm';
import Test from './pages/admin/test';



function App() {

  const [user, setuser] = useState(getLocalStorage(USER_KEY))

  contextPrototype.user = user
  contextPrototype.setUser = setuser

  return (
    <UserContext.Provider value={contextPrototype}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/acteurs' element={<Acteurs />} />
          <Route path='/seances' element={<Seance />} />
          <Route path='/seances/:id' element={<Seances />} />
          <Route path='/film/:id' element={<DetailFilm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/film/create' element={<CreateFilm />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </main>

      <footer>
        <p>mon footer</p>
      </footer>
    </UserContext.Provider>
  );
}

export default App;

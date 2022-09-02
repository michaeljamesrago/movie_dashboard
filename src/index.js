import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Top from './routes/top'
import Search from './routes/search'
import Favorites from './routes/favorites'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/top' element={<Top />} />
          <Route path='/search' element={<Search />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

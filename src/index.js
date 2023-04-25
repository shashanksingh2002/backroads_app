import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navigation} from './components/Header';
import {Home} from './components/Home'
import {About} from './components/About'
import {Services} from './components/Services'
import {Tours} from './components/Tours'
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navigation/>
      <Home/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
  </React.StrictMode>
);

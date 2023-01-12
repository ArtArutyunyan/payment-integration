import React from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

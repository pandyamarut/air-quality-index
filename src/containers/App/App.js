import React from 'react';
// import logo from './logo.svg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import DetailHeader from './components/DetailHeader';
import SectionBox from './components/SectionBox';
import CompareContainer from './components/CompareBox';

function App() {
  return (
    <div>
      <Header />
      <DetailHeader />
      <SectionBox />
      <CompareContainer />
    </div>
  )
}

export default App;
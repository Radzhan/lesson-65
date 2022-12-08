import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Page from './container/Page/Page';

function App() {
  return (
    <div className='container-fluid'>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={(
          <>
            <h1>This app can show u 5 pages</h1>
            <p>about - information about somthing importent</p>
            <p>history - information about interesting facts in history</p>
            <p>quotes - information about motivashinal quotes</p>
            <p>news - information about news in a world</p>
            <p>contacts - information about your contacts</p>
          </>
        )} />
        <Route path='/pages/:pageName' element={(
          <Page />
        )} />
      </Routes>
    </div>
  );
}

export default App;

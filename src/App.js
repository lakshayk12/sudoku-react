import './App.css';
import React from 'react';
import { Header } from './components/Header';
import Table from './components/Table';
import { GlobalProvider } from './context/GlobalState';
import Submit from './components/Submit';


function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Table />
        <Submit />
      </div>
    </GlobalProvider>
  );
}

export default App;

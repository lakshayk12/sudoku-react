import './App.css';
import React from 'react';
import { Header } from './components/Header';
import Table from './components/Table';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Table />
      </div>
    </GlobalProvider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Auth from './features/auth/Auth';

function App() {
  return (
    <div className="App">
      <Auth/>
    </div>
  );
}

export default App;

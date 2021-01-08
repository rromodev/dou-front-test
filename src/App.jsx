import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store/positionSlice";

import './App.css';

import Board from './containers/Board'

function App() {
 
  return (
    <Provider store={store}>
      <Board />
    </Provider>
    
  );
}

export default App;

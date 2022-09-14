import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import { BackgroundImage } from './components/BackgroundImage';
import { Header } from './components/Header';
// import { Form } from './components/Form';
import { MainContent } from './components/MainContent';
import {Footer} from "./components/Footer";

function App() {
  return (
      <div className="App">
          < Header />
          < BackgroundImage />
          < MainContent />
          < Footer />
          {/*< Form />*/}
      </div>
  );
}

export default App;

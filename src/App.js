import './App.css';
import React, {useEffect, useState, useContext} from 'react'
import axios from './axiosbase';
import Weather from './components/Weather/Weather';
import ThemeContext, {ThemeProvider} from './contexts/ThemeProvider';

function App() {

return (
  <ThemeProvider >
    <Weather/>
  </ThemeProvider>
);
}

export default App;


 

import SignIn from './Components/SignIn'
import SearchBar from './Components/SignIn'
import StoreNav from './Components/StoreNav'
import Background from './Components/BackGround'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Aldilogo from './aldi-logo.png'
import Costcologo from './costco-logo.png'
import Heblogo from './HEB-Logo.png'
import Krogerlogo from './kroger-logo.png'
import Samslogo from './Sams-Club-Logo.png'
import Sproutslogo from './sprouts-logo.png'
import Instahome from './insta-logo.png'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Error from './ErrorLogo.png'

import Aldi from './Aldi';
import Costco from './Costco';
import Heb from './Heb';
import Kroger from './Kroger';
import SamsClub from './SamsClub';
import Sprouts from './Sprouts';
import Home from './Home'
import ErrorComponent from './Error'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>InstaCart</h1>
      <div><SignIn/></div>
      <div><Background/></div>
      <div><SearchBar/></div>
      <div><StoreNav/></div>
    </div>
  );
}

export default App;

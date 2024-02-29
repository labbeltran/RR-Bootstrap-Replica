import SignIn from './Components/SignIn'
import SearchBar from './Components/SignIn'
import StoreNav from './Components/StoreNav'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>InstaCart</h1>
      <div><SignIn/></div>
      <div><SearchBar/></div>
      <div><StoreNav/></div>
    </div>
  );
}

export default App;

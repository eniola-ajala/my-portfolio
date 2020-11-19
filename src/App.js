import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './component/header';
import CustomNav from './component/sidenav'



function App() {
  return (

    <BrowserRouter>
    <CustomNav />
      <Header/>
      
      
      

      
      

      </BrowserRouter>
      
      
  );
}

export default App;

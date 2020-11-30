// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './component/header';
// import CustomNav from './component/sidenav'
import Landing from './component/landingPage'



function App() {
  return (

    <BrowserRouter>
    <Switch>
      <Route path="/">
      <Landing/>

      </Route>
    </Switch>
    
      <Header/>
      
      
      

      
      

      </BrowserRouter>
      
      
  );
}

export default App;

import React from 'react'
import Header from './Components/Header'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Descritpion from './Components/Descritpion';


const App = () => {
  return ( <Router>
      <Route path="/" render={()=><Header/>}/>
      <Route path ="/" component ={AddMovie}/>
      <Route  exact path ='/' component ={MovieList}/>
      <Route path ="/Description/:id" component ={Descritpion}/>
      
  
  
  </Router>);
}
 
export default App;
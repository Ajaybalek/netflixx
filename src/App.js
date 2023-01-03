import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import { originals,Action,Horror,Comedy,Documentaries } from "./urls";
import "./App.css"
import Banner from './Components/Banner/Banner'
import Rowpost from "./Components/row/Rowpost";






function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url= {originals} title= {'Netflix Originals'}/>
      <Rowpost url = {Action} title = {'Action'}  isSmall/>
      <Rowpost url = {Comedy} title = {'Comedy'} isSmall/>
      <Rowpost url = {Horror} title = {'Horror'} isSmall/>
      <Rowpost url = {Documentaries} title = {'Documentaries'} isSmall/>

     
      
    </div>
  );
}

export default App;

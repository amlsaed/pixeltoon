import React, {Component} from 'react';
import{BrowserRouter,Route}from"react-router-dom";
import './App.css';
import'./style/style.css'

import Header from './header';
import Section from './section';
import Titels from './titels';
import Content from './content';

import Footer from './footer/footer';
import Home from './home';
import About from './footer/about';

class App extends Component{
  
  render(){
  return (
    <BrowserRouter>
           <div>
           <Header/>
                  <Route path="/"  exact component={Home}></Route>
                  <Route path={"/about"}  exact component={About}></Route>
                  <Route path={"/:sectionName"} exact component={Section}></Route>
                  <Route path={"/:sectionName/:secname"} exact component={Titels}></Route>
                  <Route path={"/:sectionName/:secname/:titel"} exact component={Content}></Route>
                  

           

           <Footer/>
           </div>
      </BrowserRouter>
  );
  }
}

export default App;

import React from 'react';
import './App.css';
import Card from './Home/CardProduct';
import Footer from './Home/Footer/Footer';
import Navbar from './Home/Navbar';
import Navs from './Home/Navs';
import TableTop from './Home/TableTop'
import TableBottom from './Home/TableBottom'
import SlideTop from './Home/SlideTop'
import CardCar from './Home/CardCar'

function App(){
  return(
    <div>
      <Navbar/>
      <SlideTop/>
      <CardCar/>
      <TableTop/>
      <Card/>
      <TableBottom/>
      <Navs/>
      <Footer/>
      {/* <BrowserRouter> */}
{/*    
<Route exact path="/" component={Home}/>
<Route path="/contact" component={Register}/>
<Route path="/post" component={Post}/>
<Route path="/login" component={Login}/>
<Route path="/profile" component={Profile}/>
   </BrowserRouter> */}
    </div>
  );
}
export default App;

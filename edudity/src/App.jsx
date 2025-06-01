import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import Titel from './Components/Titel/Titel';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Tastimonials from './Components/Testimonials/Tastimonials'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {

const [palyStae , setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Titel subtitel='Our PROGRAM' titel='What We Offer '/>
       <Program/>
       <About setPlayState={setPlayState}/>
       <Titel subtitel='Gallery' titel='Campus Photos'/>
       <Campus/>
         <Titel subtitel='TESTIMONIALS' titel="What Student Say's"/>
         <Tastimonials/>
         <Titel subtitel='Contact us' titel="Get in Tuch"/>
         <Contact/>
        <Footer/>
         
      </div>
     <VideoPlayer palyStae={palyStae}  setPlayState={setPlayState}/>
    </div>
    
  )
}

export default App;

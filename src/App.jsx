import React from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel';
import Aboutme from './components/Aboutme';
import Yefaisquoi from './components/Yefaisquoi';
import Contact from './components/Contact';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <Aboutme />
      <Yefaisquoi/>
      <Contact/>
      <Footer/>

      </div>
  )
}

export default App;

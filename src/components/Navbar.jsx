import React from 'react';
import monlogo from '../img/monlogo.png'
import Contact from './Contact';



const Navbar = (props) =>{
   return(
      
<nav className="navbar navbar-light navbar-1 white">

  
  <a id="lelogoaceuil"className="thelogo" href="#"><img className='leliogo' src={monlogo} alt="lelogo"/></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

 
  <div className="collapse navbar-collapse" id="navbarSupportedContent15">

   
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#lelogoaceuil">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Aboutme">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Whatjedo">What i do</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact</a>
      </li>
      
    </ul>
  

  </div>
  

</nav>

   );
   };


export default Navbar;






























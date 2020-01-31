import React from 'react';
import img4 from '../img/Img04.jpg'




const Aboutme = (props) =>{
    return(
        <div id="Aboutme"className='row'>
            <div className='col-6'>

            <img className='limageaboutme' src={img4} alt='' />
            </div>
            <div className='lemoiquimepresente col-6'>
                <h4 className='aboutmoi text-muted'>About me</h4>
                <h1 className='letitre  text-primary'>I'M Expert In Web</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error dolor. Distinctio, reiciendis repellat vel totam ea nemo facere magnam nulla quaerat iusto numquam saepe ipsam in, dignissimos earum quis!</p>
                <li>Design</li>
                <li>Devlopment</li>
                <li>Copywriting</li>


                </div>

        </div>
        
        
       
    )
}

export default Aboutme;
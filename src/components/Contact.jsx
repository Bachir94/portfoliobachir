import React from 'react';


const Contact = () =>{
        return (
            <div id="Contact" zclassName="jtecontact">
            <p>Contacter moi</p>
            <form>
            <label>Nom</label>
            <input type="text" id="lenom" name="Nom" placeholder="Votre nom" />
            <label>Prénom</label>
            <input type="text" id="leprenom" name="Prénom" placeholder="Votre prénom" />
        
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Votre E-mail" />
        
        
            <label>Message</label>
            <textarea id="subject" name="subject" placeholder="contacter moi"></textarea>
            <input type="Envoyer" value="Envoyer" />
            </form>
            </div>
            </div>
          );
        };

export default Contact;
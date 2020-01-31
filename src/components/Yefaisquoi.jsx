import React from 'react'

const Card  = () => {

            const data = [ 
                { title: 'Design', content: 'LOReum ipsus.....'},
                { title: 'Devlopment', content: 'LOReum ipsus.....'},
                { title: 'Copywriting', content: 'LOReum ipsus.....'}
            ]

        return <div className="card">
           {data.map((element, index) => (
               <div id="Whatjedo"key={`maindiv ${index}`} className={'maindiv'}>
                   <h4>{element.title}</h4>
                   <p>{element.content}</p>
               </div>
           )

           )}
        </div>

}
export default Card
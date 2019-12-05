import React from 'react';
import './Card.css';


const Card = ({name,email,id}) =>{
    return(
        <div className='tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 b courier'>
            <img src ={`https://robohash.org/${id}?200x200`} alt= 'whoopi'/>
            <div>
                <h2>
                   {name}
                </h2>
                <p>
                   {email}
                </p>
            </div>

        </div>
    )
}

export default Card;

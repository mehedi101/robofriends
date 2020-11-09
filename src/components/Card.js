import React from 'react';

const Card = ({id, name, email, username}) =>{

    return (

        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt={username } />
            <h3>Name: {name}  </h3>
            <p>Email: {email}  </p>
        </div>
    )

}

export default Card;
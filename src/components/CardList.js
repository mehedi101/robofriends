import React from 'react';

import Card from './Card';


const CardList = ({robots}) =>{

  return (

    <>
    {
        robots.map(({id, name, email, username})=>{
          return    <Card key={id} id={id} name={name} email={email} username={username} />
      })

    }
      
  </>
  )

}

export default CardList;
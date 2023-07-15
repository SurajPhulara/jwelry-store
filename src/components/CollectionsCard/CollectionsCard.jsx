import React from 'react'
import "./CollectionsCard.css"

const Collections_card = (props) => {
  return (
    <div className='Collections_card'>
      <img src={props.image} alt="" />
      <div className="card_name font font-primary">{props.text}</div>
    </div>
  )
}

export default Collections_card

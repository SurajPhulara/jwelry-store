import React from 'react'
import "./Features_card.css"
import { deliveryTruck } from '../../assets'

const Features_card = (props) => {
  return (
    <div className='Features_card'>
        <img src={props.icon} alt="card icon"/>
        <div className="features_card_title font-primary">{props.cardname}</div>
        <p className='features_card_details font-secondary'>Ea esse elit anim commodo laborum pariatur nisi. Voluptate elit d</p>
    </div>
  )
}

export default Features_card

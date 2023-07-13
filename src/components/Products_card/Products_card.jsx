import React from 'react'
import "./Product_card.css"
import { ProductImage1 } from '../../assets'

const Products_card = (props) => {
  return (
    <div className='Products_card'>
        <img src={props.image} alt="Product Image"/>
        <div className="product_name font-primary">{props.name}</div>
        <div className="product_price font-secondary">{props.price}</div>
    </div>
  )
}

export default Products_card

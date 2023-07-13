import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { ProductImage1, ProductImage2, ProductImage3, ProductImage4, deliveryTruck, img1, img2, messageIcon, payment, playButtonIcon } from '../../assets'
import Products_card from '../../components/Products_card/Products_card'
import Features_card from '../../components/Features_card/Features_card'

const Home = () => {
  return (
    <div className='home'>

      <Navbar></Navbar>
      
      <div className="hero__section">
        <div className="hero__section__left font-primary">
          Sparkle and Shine: Discover the Exquisite Elegance
          <button className='button'>Shop now</button>
        </div>
        <div className="hero__section__right">
          <img src={img1} alt="women wearing jwelrey" className='image1'/>
          <div className="hero__section__video">
          <img src={img2} alt="marketing vedio" className='image2'/>
          <img src={playButtonIcon} alt="" className='playbutton'/>
          </div>
        </div>
      </div>
      
      <div className="features__section">
        <Features_card icon={deliveryTruck} cardname='Delivery'></Features_card>
        <Features_card icon={messageIcon} cardname='Customer care'></Features_card>
        <Features_card icon={payment} cardname='Payment security'></Features_card>
      </div>

      <div className="featured_products__section">
        <div className="product__section__left">
          <div className="featured_product_heading font-primary">Featured Products</div>
          <div className="product__section__description">Quis Lorem laborum quis esse officia ad commodo commodo anim est et nulla </div>
          <button className='button' style={{color:'#0D554AFF', borderColor:'#0D554AFF'}}>Shop now</button>
        </div>
        <div className="product_section__products">
          <Products_card image={ProductImage1} name='Radiance Necklace' price='$168.76'></Products_card>
          <Products_card image={ProductImage2} name='Exquisite Earrings' price='$125.28'></Products_card>
          <Products_card image={ProductImage3} name='Glamour Necklace' price='$620.73'></Products_card>
          <Products_card image={ProductImage4} name='Delights Earrings' price='$327.71'></Products_card>
        </div>
      </div>
      
      <div className="our-collections__section">our collection</div>
      <div className="portfolio__section">our selection of jwelry</div>
      <div className="our-story__section">our story</div>
      <div className="testimonials__section">testimonials</div>
      <Footer></Footer>
    </div>
  )
}

export default Home

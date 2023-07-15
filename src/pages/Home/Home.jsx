import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { CollectionImage1, CollectionImage2, CollectionImage3, CollectionImage4, CollectionImage5, CollectionImage6, ProductImage1, ProductImage2, ProductImage3, ProductImage4, deliveryTruck, img1, img2, jwelry1, jwelry2, jwelry3, jwelry4, messageIcon, nextIcon, payment, playButtonIcon, prevIcon, testimonialimg1 } from '../../assets'
import Products_card from '../../components/Products_card/Products_card'
import Features_card from '../../components/Features_card/Features_card'
import Collections_card from '../../components/Collections_card/Collections_card'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} jj`}
      style={{
        ...style, display: "block",
        position: 'absolute',
        left: '97.8%',
        top: '42%',
        zIndex: '1',
        background: 'radial-gradient(circle at center, rgba(0, 0, 0, .9) 5%, rgba(255, 255, 255, 0) 80%'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block",
        position: 'absolute',
        left: '1.6%',
        top: '42%',
        zIndex: '1',
        background: 'radial-gradient(circle at center, rgba(0, 0, 0, .9) 5%, rgba(255, 255, 255, 0) 80%'
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow2(props){
  const { className, style, onClick } = props;
  return (
    <div className="prev_arrow2" onClick={onClick} >
      <img src={prevIcon} alt="" />
    </div>
  )
}
function NextArrow2(props){
  const { className, style, onClick } = props;
  return (
    <div className="next_arrow2" onClick={onClick} >
      <img src={nextIcon} alt="" />
    </div>
  )
}

const Home = () => {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,

    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          variableWidth: true,
          infinite: true,
        }
      }
    ]
  };
  return (
    <div>
    <div className='home'>

      <div className="hero__section">
        <div className="hero__section__left font-primary">
          Sparkle and Shine: Discover the Exquisite Elegance
          <button className='button'>Shop now</button>
        </div>
        <div className="hero__section__right">
          <img src={img1} alt="women wearing jwelrey" className='image1' />
          <div className="hero__section__video">
            <img src={img2} alt="marketing vedio" className='image2' />
            <img src={playButtonIcon} alt="" className='playbutton' />
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
          <div className="product__section__description font-secondary">Quis Lorem laborum quis esse officia ad commodo commodo anim est et nulla </div>
          <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
        </div>
        <div className="product_section__products">
          <Slider  {...settings} className='slider'>
            <Products_card image={ProductImage1} name='Radiance Necklace' price='$168.76'></Products_card>
            <Products_card image={ProductImage2} name='Exquisite Earrings' price='$125.28'></Products_card>
            <Products_card image={ProductImage3} name='Glamour Necklace' price='$620.73'></Products_card>
            <Products_card image={ProductImage4} name='Delights Earrings' price='$327.71'></Products_card>
          </Slider>
        </div>
      </div>

      <div className="our-collections__section">
        <div className="heading">Our Collections</div>
        <div className="collection__items">
          <Collections_card image={CollectionImage1} text="Luxurious Lustre"></Collections_card>
          <Collections_card image={CollectionImage2} text="Radiant Reflection"></Collections_card>
          <Collections_card image={CollectionImage3} text="Majestic Mementos"></Collections_card>
          <Collections_card image={CollectionImage4} text="Blissful Baubles"></Collections_card>
          <Collections_card image={CollectionImage5} text="Timeless Treasures"></Collections_card>
          <Collections_card image={CollectionImage6} text="Divine Diamonds"></Collections_card>
        </div>
        <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
      </div>

      <div className="portfolio__section">
        <div className="product__section__left">
          <div className="featured_product_heading font-primary">Our Selection of Jewelry</div>
          <div className="product__section__description">Nulla ad magna exercitation elit reprehenderit cupidatat veniam velit aliqu</div>
          <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
        </div>
        <div className="product_section__products">
          <Slider  {...settings} className='slider'>
            <Products_card image={jwelry1} name='Shimmering Ring' price='$168.76'></Products_card>
            <Products_card image={jwelry2} name='Exquisite Earrings' price='$125.28'></Products_card>
            <Products_card image={jwelry3} name='Elegance Earrings' price='$620.73'></Products_card>
            <Products_card image={jwelry4} name='Luxury Charms Brooch' price='$327.71'></Products_card>
          </Slider>
        </div>
      </div>

      <div className="our-story__section">
        <div className="heading">Our Story</div>
        <iframe
          className='our-story__video'
          src='https://www.youtube.com/embed/xuuNZQwhEn4?autoplay=1&mute=1&playlist=xuuNZQwhEn4'
          allow='accelerometer; autoplay; encrypted-media'
          allowFullScreen
        ></iframe>
      </div>

      <div className="testimonials__section">
        <div className="testimonial_left">
          <div className="section__title font-primary">From the people </div>
          <div className="section__description font-secondary">
            We love hearing from our customers! <br></br>You’re the reason we’re here and the reason we do what we do.</div>
        </div>
        <div className="testimonial_right">
        <Slider {...settings} nextArrow={<NextArrow2 />} prevArrow={<PrevArrow2/>} className="slider">
        <>
        <div className="testimonial">
          <img src={testimonialimg1} alt="" />
          <div className="testimonial_content">
            <div className="user_review font-secondary">The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.</div>
            <div className="user_name font-secondary">Anna Fernandez</div>
            <div className="user_location font-secondary">USA</div>
          </div>
        </div>
        </>
        <>
        <div className="testimonial">
          <img src={testimonialimg1} alt="" />
          <div className="testimonial_content">
            <div className="user_review font-secondary">The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.</div>
            <div className="user_name font-secondary">Anna Fernandez</div>
            <div className="user_location font-secondary">USA</div>
          </div>
        </div>
        </>
      </Slider>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Home

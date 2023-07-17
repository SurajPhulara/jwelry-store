import React from 'react';
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { CollectionImage1, CollectionImage2, CollectionImage3, CollectionImage4, CollectionImage5, CollectionImage6, ProductImage1, ProductImage2, ProductImage3, ProductImage4, deliveryTruck, img1, img2, jwelry1, jwelry2, jwelry3, jwelry4, messageIcon, nextIcon, payment, playButtonIcon, prevIcon, testimonialimg1 } from '../../assets';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import CollectionsCard from '../../components/CollectionsCard/CollectionsCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SampleNextArrow(props) {
  // Custom next arrow component for the first slider
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        display: "block",
        position: 'absolute',
        left: 'calc(100% - 28px)', // Positioning the arrow on the right side of the slider
        top: '42%', // Positioning the arrow vertically at the middle of the slider
        zIndex: '1',
        background: 'radial-gradient(circle at center, rgba(0, 0, 0, .9) 5%, rgba(255, 255, 255, 0) 80%' // Applying a radial gradient background to the arrow
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  // Custom previous arrow component for the first slider
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: 'absolute',
        left: '20px', // Positioning the arrow on the left side of the slider
        top: '42%', // Positioning the arrow vertically at the middle of the slider
        zIndex: '1',
        background: 'radial-gradient(circle at center, rgba(0, 0, 0, .9) 5%, rgba(255, 255, 255, 0) 80%' // Applying a radial gradient background to the arrow
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow2(props){
  // Custom previous arrow component for the second slider
  const { className, style, onClick } = props;
  return (
    <div className="prev_arrow2" onClick={onClick} >
      <img src={prevIcon} alt="" />
    </div>
  )
}

function NextArrow2(props){
  // Custom next arrow component for the second slider
  const { className, style, onClick } = props;
  return (
    <div className="next_arrow2" onClick={onClick} >
      <img src={nextIcon} alt="" />
    </div>
  )
}

const Home = () => {
  // settings for slider
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,

    nextArrow: <SampleNextArrow/>, // Custom next arrow component for the first slider
    prevArrow: <SamplePrevArrow/>, // Custom previous arrow component for the first slider
  };

  return (
    <div className='home'>

      {/* Hero Section */}
      <div className="hero__section">
        <div className="hero__section__left font-primary">
          {/* Hero text */}
          Sparkle and Shine: Discover the Exquisite Elegance
          <button className='button'>Shop now</button>
        </div>
        <div className="hero__section__right">
          {/* Hero image */}
          <img src={img1} alt="women wearing jewelry" className='image1' />
          <div className="hero__section__video">
            {/* Video placeholder */}
            <img src={img2} alt="marketing video" className='image2' />
            <img src={playButtonIcon} alt="" className='playbutton' />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features__section">
        {/* Features Cards */}
        <FeaturesCard icon={deliveryTruck} cardname='Delivery'></FeaturesCard>
        <FeaturesCard icon={messageIcon} cardname='Customer care'></FeaturesCard>
        <FeaturesCard icon={payment} cardname='Payment security'></FeaturesCard>
      </div>

      {/* Featured Products Section */}
      <div className="featured_products__section">
        <div className="product__section__left">
          {/* Heading and description */}
          <div className="featured_product_heading font-primary">Featured Products</div>
          <div className="product__section__description font-secondary">Quis Lorem laborum quis esse officia ad commodo commodo anim est et nulla </div>
          <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
        </div>
        <div className="product_section__products">
          {/* Slider with Products Cards */}
          <Slider {...settings} className='slider'>
            <ProductsCard image={ProductImage1} name='Radiance Necklace' price='$168.76'></ProductsCard>
            <ProductsCard image={ProductImage2} name='Exquisite Earrings' price='$125.28'></ProductsCard>
            <ProductsCard image={ProductImage3} name='Glamour Necklace' price='$620.73'></ProductsCard>
            <ProductsCard image={ProductImage4} name='Delights Earrings' price='$327.71'></ProductsCard>
          </Slider>
        </div>
      </div>

      {/* Our Collections Section */}
      <div className="our-collections__section">
        <div className="heading">Our Collections</div>
        <div className="collection__items">
          {/* Collections Cards */}
          <CollectionsCard image={CollectionImage1} text="Luxurious Lustre"></CollectionsCard>
          <CollectionsCard image={CollectionImage2} text="Radiant Reflection"></CollectionsCard>
          <CollectionsCard image={CollectionImage3} text="Majestic Mementos"></CollectionsCard>
          <CollectionsCard image={CollectionImage4} text="Blissful Baubles"></CollectionsCard>
          <CollectionsCard image={CollectionImage5} text="Timeless Treasures"></CollectionsCard>
          <CollectionsCard image={CollectionImage6} text="Divine Diamonds"></CollectionsCard>
        </div>
        <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio__section">
        <div className="product__section__left">
          {/* Heading and description */}
          <div className="featured_product_heading font-primary">Our Selection of Jewelry</div>
          <div className="product__section__description">Nulla ad magna exercitation elit reprehenderit cupidatat veniam velit aliqu</div>
          <button className='button' style={{ color: '#0D554AFF', borderColor: '#0D554AFF' }}>Shop now</button>
        </div>
        <div className="product_section__products">
          {/* Slider with Jewelry Cards */}
          <Slider {...settings} className='slider'>
            <ProductsCard image={jwelry1} name='Shimmering Ring' price='$168.76'></ProductsCard>
            <ProductsCard image={jwelry2} name='Exquisite Earrings' price='$125.28'></ProductsCard>
            <ProductsCard image={jwelry3} name='Elegance Earrings' price='$620.73'></ProductsCard>
            <ProductsCard image={jwelry4} name='Luxury Charms Brooch' price='$327.71'></ProductsCard>
          </Slider>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="our-story__section">
        <div className="heading">Our Story</div>
        <iframe
          className='our-story__video'
          src='https://www.youtube.com/embed/xuuNZQwhEn4?autoplay=1&mute=1&playlist=xuuNZQwhEn4'
          allow='accelerometer; autoplay; encrypted-media'
          allowFullScreen
        ></iframe>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials__section">
        <div className="testimonial_left">
          {/* Testimonials heading and description */}
          <div className="section__title font-primary">From the people </div>
          <div className="section__description font-secondary">
            We love hearing from our customers! <br></br>You’re the reason we’re here and the reason we do what we do.</div>
        </div>
        <div className="testimonial_right">
          {/* Slider with Testimonial Cards */}
          <Slider {...settings} variableWidth={false} nextArrow={<NextArrow2 />} prevArrow={<PrevArrow2/>} className="slider">
            <div className="">
            <div className="testimonial">
              <img src={testimonialimg1} alt="" />
              <div className="testimonial_content">
                <div className="user_review font-secondary">The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.</div>
                <div className="user_name font-secondary">Anna Fernandez</div>
                <div className="user_location font-secondary">USA</div>
              </div>
            </div>
            </div>
              
            <div className="">
            <div className="testimonial">
              <img src={testimonialimg1} alt="" />
              <div className="testimonial_content">
                <div className="user_review font-secondary">The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.</div>
                <div className="user_name font-secondary">Anna Fernandez</div>
                <div className="user_location font-secondary">USA</div>
              </div>
            </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;

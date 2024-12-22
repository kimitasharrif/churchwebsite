
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../Styles/HomeCarousel.css'; // Custom styles for the carousel
import praisea from '../assets/images/praise-a.jpg'
import praiseb from '../assets/images/praise-b.jpg'
import praisec from '../assets/images/praise-c.jpg'
import praisequire from '../assets/images/praisequire.jpg'
import prayerSessionImage from '../assets/images/prayersession.jpg'


const HomeCarousel = () => {
  const carouselItems = [
    {
      image: praisea,
      title: '',
      description: 'Welcome to All-Nation PEFA Church Kayole B.',
      link: '/g-gym',
    },
    {
      image: praiseb,
      title: 'Join us as we praise the Lord',
      description: 'Join us and be a part of a thriving community of faith.',
      link: '/y-yoga',
    },
    {
      image: praisec,
      title: '',
      description: 'Unwind in our sauna, perfect for post-workout relaxation.',
      link: '/s-sauna',
    },
    {
      image: praisequire,
      title: 'Come Experience with our devoted church quire',
      description: 'Take a refreshing dip in our pristine swimming pool.',
      link: '/s-pool',
    },
    {
      image: prayerSessionImage,
      title: 'Come lets pray together',
      description: 'Immerse yourself in tranquility with our luxurious steam bath.',
      link: '/s-bath',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,  
  };

  return (
    <Slider {...settings} className="carousel-container">
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-slide">
          <img src={item.image} alt={item.title} className="carousel-image" />
          <div className="carousel-caption">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to={item.link} className="carousel-link">Join</Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeCarousel;

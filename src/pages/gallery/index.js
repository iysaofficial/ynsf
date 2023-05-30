import React from 'react';
import Subscribe from '../../components/Home/Subscribe';
import FeaturedItem from '../../components/HomeThree/FeaturedItem';
import FeaturedThemesProducts from '../../components/HomeThree/FeaturedThemesProducts';
import HomeThreeBlog from '../../components/HomeThree/HomeThreeBlog';
import Header from '../../components/HomeMain/Header';
import HeroArea from '../../components/HomeMain/HeroArea';
import NewestItems from '../../components/HomeThree/NewestItems';
import TamplatesNeed from '../../components/HomeThree/TamplatesNeed';
import Footer from '../../components/homeTwo/Footer';
import Testimonial from '../../components/homeTwo/Testimonial';
import PricingArea from '../../components/Pricing/PricingArea';
import SEO from '../../components/seo';
import AboutArea from '../../components/HomeMain/AboutArea';
import Organizer from '../../components/HomeMain/Organizer';
import Category from '../../components/HomeMain/Category';
import News from '../../components/HomeMain/News';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Home Main'} />
         <Header />    
         <NewestItems />
         <Footer />
      </>
   );
};

export default index;
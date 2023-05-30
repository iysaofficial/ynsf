import React from 'react';
// import Subscribe from '../components/Home/Subscribe';
// import FeaturedItem from '../components/HomeThree/FeaturedItem';
// import FeaturedThemesProducts from '../components/HomeThree/FeaturedThemesProducts';
// import HomeThreeBlog from '../components/HomeThree/HomeThreeBlog';
import Header from '../components/HomeMain/Header';
import HeroArea from '../components/HomeMain/HeroArea';
// import NewestItems from '../components/HomeThree/NewestItems';
// import TamplatesNeed from '../components/HomeThree/TamplatesNeed';
import Footer from '../components/HomeMain/Footer';
// import Testimonial from '../components/homeTwo/Testimonial';
import ContactInfo from '../components/Contact/ContactInfo';
import SEO from '../components/seo';
import AboutArea from '../components/HomeMain/AboutArea';
import Organizer from '../components/HomeMain/Organizer';
import Category from '../components/HomeMain/Category';
import News from '../components/HomeMain/News';
import Video from '../components/HomeMain/Video';

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Home Default"} />
      <Header />
      <HeroArea />
      <Organizer />
      <AboutArea />
      <Video />
      <Category />
      <News />
      <ContactInfo />
      <Footer />
    </>
  );
}

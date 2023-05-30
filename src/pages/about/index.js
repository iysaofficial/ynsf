import React from 'react';
import AboutArea from '../../components/About/AboutArea';
import HeroArea from './HeroArea';
import BgShape from '../../components/common/BgShape';
import Promotion from '../../components/About/Promotion'
import OurValue from '../../components/About/OurValue'
import BannerArea from '../../components/Home/BannerArea';
import DigitalEcosystem from '../../components/About/DigitalEcosystem'
import BrandArea from '../../components/Home/BrandArea';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Culture from '../../components/About/Culture';
import SEO from '../../components/seo';

const About = () => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <Header />
         <HeroArea/>
         <Promotion/>
         <OurValue/>
         <DigitalEcosystem/>
         {/* <BrandArea spacing="pb-65 pt-80" /> */}
         {/* <AboutArea /> */}
         {/* <BgShape /> */}
         <Culture />
         {/* <BannerArea /> */}
         <Footer />
      </>
   );
};

export default About;
import React from 'react';

const HeroArea = () => {
   return (
      <>
          <section className="hero__area hero__height grey-bg-3 d-flex align-items-center">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                     <div className="hero__thumb-wrapper scene ml-70 p-relative">
                        <div className="hero__thumb one d-none d-lg-block">
                           <img className="layer" data-depth="0.2" src="assets/img/hero/hero-1.jpg" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xxl-6 ">
                     <div className="hero__content">
                        <h2 className="hero__title">
                           <span>Unlock Connection between</span> <br />
                           <span>innovator and Telkomsel</span> <br />
                           <span>digital ecosytem</span> <br />
                        </h2>
                        <p>{`We're here with the initiative to engage with indonesia's enterprenurial digital ecosytem`}</p>
                        <a class="m-btn m-btn-white banner__more" href="/about"> <span></span> Learn More</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;
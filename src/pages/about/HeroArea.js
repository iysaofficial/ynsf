import React from 'react';

const HeroArea = () => {
   return (
      <>
          <section className="hero__area hero__height grey-bg-1 d-flex align-items-center">
            <div className="container">
               <span className="about__sub-title">{"Home > About"}</span>
               <div className="row pt-15  ">
                  <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                     <div className="hero__thumb-wrapper scene ml-70 p-relative">
                        <div className="hero__thumb one d-none d-lg-block">
                           <img className="layer" data-depth="0.2" src="assets/img/about/abouts.jpg" alt=""/>
                        </div>   
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xxl-6 ">
                     <div className="hero__content"> 
                     <p>{`Tentang YNSF`}</p> 
                        <h2 className="hero__title">
                           <span>PENDAHULUAN</span> <br />
                        </h2>
                        <p>{`Youth National Science Fair (YNSF) merupakan ajang adu kemampuan para peneliti muda berusia 13-20 tahun dalam mempresentasikan hasil penelitian yang telah mereka lakukan. Melalui Youth National Science Fair 2023, para peneliti muda berkesempatan untuk memaparkan hasil karya mereka, memperkaya wawasan, meningkatkan kemampuan berkomunikasi dan berkesempatan untuk berkompetisi di tingkat dunia karena juara dari YNSF 2023 secara otomatis akan mewakili Indonesia dalam ajang internasional.`}</p>
                        
                        {/* <a class="m-btn m-btn-white banner__more" href="/about"> <span></span> Learn More</a> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;
import Link from 'next/link';
import React from 'react';

const Video = () => {
   return (
      <>
         <section className="hero__area hero__height-2 grey-bg-16 d-flex align-items-center">
            <div className="hero__shape">
               <img className="circle-2 circle-3" src="assets/img/icon/hero/hero-circle-2.png" alt="circle" />
               <img className="dot dot-2" src="assets/img/icon/hero/hero-dot-2.png" alt="circle" />
               <img className="triangle triangle-2" src="assets/img/icon/hero/hero-triangle.png" alt="circle" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="hero__content hero__content-2 text-center mt-5">
                        <h2>After Event 2023</h2>
                        <div className="hero__search-box mt-40 mb-65">
                           <div className="hero__search-thumb">
                           <iframe width="700" height="350" src="https://www.youtube.com/embed/0j7IrOGZsE0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                              <img className="hero-search-sm" src="assets/img/hero/home-2/hero-search-sm.png" alt="" />
                              <div className="hero__search-shape">
                                 <img className="man-search" src="assets/img/hero/home-2/man-search.png" alt="" />
                                 <img className="hero-man-1" src="assets/img/hero/home-2/man-1.png" alt="" />
                                 <img className="hero-man-2" src="assets/img/hero/home-2/man-2.png" alt="" />
                                 <img className="hero-search-square" src="assets/img/icon/hero/hero-square.png" alt="" />
                                 <img className="hero-search-square-2" src="assets/img/icon/hero/hero-square-2.png" alt="" />
                              </div>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Video;
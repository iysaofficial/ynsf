import Link from 'next/link';
import React from 'react';

const TrendingLandmark = () => {
   return (
      <>
         <section className="trending__area pt-110 pb-110 grey-bg">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-8 col-xl-8 col-lg col-md-8">
                     <div className="section__title-wrapper mb-50">
                        <h4>WHAT WE CAN DO FOR YOU</h4>
                        <h2 className="section__title">We help you to incubate your startups</h2>
                        <p>with the assistance of our innovation pillars.</p>
                     </div>
                  </div>
                  
                  <div className="row">
                     <div className="col-xxl-8">
                        <div className="cta__content wow fadeInUp" data-wow-delay=".7s">
                           <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn active"> <span></span> NEXTDEV</a></Link>
                           <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn active"> <span></span> TINC</a></Link>
                           <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn active"> <span></span> TMI</a></Link>
                           <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn"> <span></span> INDICO</a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default TrendingLandmark;
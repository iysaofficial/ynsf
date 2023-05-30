import Link from 'next/link';
import React from 'react';

const Culture = () => {
   return (
      <>
         <section className="culture__area pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-md-6">
                     <div className="culture__item mb-30 wow fadeInUp" data-wow-delay=".3s" >
                     <p>Culture</p>
                        <h3 className="culture__title">Embracing the young to grow</h3>
                        <p>Pulling it together with our innovation pillars, T-Connext is a platform for entrepreneurs to build the connection and grow their business to the next level as the key part of Indonesia’s digital ecosystem growth</p>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-md-6">
                     <div className="banner__item mb-30 wow fadeInUp" data-wow-delay=".7s">
                     <img className="layer" data-depth="0.2" src="assets/img/hero/sl-bg.jpg" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Culture;
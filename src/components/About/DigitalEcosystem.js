import Link from "next/link";
import React from "react";

const DigitalEcosystem = () => {
  return (
    <>
      <section className="trending__area pt-110 pb-110 grey-bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-8 col-xl-8 col-lg col-md-8">
              <div className="section__title-wrapper mb-50">
                <h4>OUR DIGITAL ECOSYSTEM ROADMAP</h4>
                <h2 className="section__title">
                  Empower growth and creating synergies through our pillars
                </h2>
                {/* <p>with the assistance of our innovation pillars.</p> */}
              </div>
            </div>
          </div>
          <div className="row pt-0">
          
          </div>
          <div className="container col-xxl-3 pl-49 ">
          <div className="row pt-0 ">
            <div className="text-left">
            <img className="ctatwo__img" data-depth="0.2" src="assets/img/about/Group 39.png" alt=""  />
              <div
              
                className="ctatwo__content wow fadeInUp"
                data-wow-delay=".7s"
              >
                
                <Link href="/pricing">
                  <div className="m-btn m-btn-border-2 ctatwo__btn active">
                    <span></span> NEXTDEV
                  </div>
                </Link>
                <h6>Discover and incubate</h6>
                <p>Scouting digital startups through incubation and mentorship</p>
                <Link href="/pricing">
                  <div className="m-btn m-btn-border-2 ctatwo__btn active">
                    <span></span> TINC
                  </div>
                </Link>
                <h6>Accelerate</h6>
                <p>Accelerate your startup with our intensive 5-step-program</p>
                <Link href="/pricing">
                  <div className="m-btn m-btn-border-2 ctatwo__btn active">
                    <span></span> TMI
                  </div>
                </Link>
                <h6>Grow your business with our venture arm as well as advanced strategic coaching</h6>
                <p>Grow your business with our venture arm as well as advanced strategic coaching</p>
                <Link href="/pricing">
                  <div className="m-btn m-btn-border-2 ctatwo__btn active">
                    <span></span> INDICO
                  </div>
                </Link>
                <h6>Strategic investment</h6>
                <p>Grow your business with our venture arm as well as advanced strategic coaching</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalEcosystem;

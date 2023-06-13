import React from 'react';

const ContactArea = () => {
   return (
      <>
      <section className="contact__area pt-105 pb-145">
            <div className="contact__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
               <img className="circle" src="assets/img/icon/sign/circle.png" alt=""/>
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt=""/>
               <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12 align-center">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Leave Us a Message.</h2>
                        <p>Jolly good bevvy butty its all gone to pot that quaint so I said cheers.</p>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-10 col-xl-10">
                     <div className="contact__map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.709639025922!2d106.78006727513107!3d-6.431333693559781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e906913915c7%3A0x1de9ddf653d9736f!2sIYSA!5e0!3m2!1sen!2sid!4v1684911095948!5m2!1sen!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                  </div>
               <div className="row">
                  <div className="col-xxl-10 col-xl-7">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form >
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Full Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Full name" name="name"/>
                                          <i className="fal fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Work email</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="e-mail address" name="email"/>
                                          <i className="fal fa-envelope"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Company Name or School Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Company Name or School Name" name="subject"/>
                                          <i className="fal fa-smile"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Website</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Website" name="website"/>
                                          <i className="fal fa-globe"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Message</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="Tell us a bil about your project" name="message"></textarea>
                                          <i className="fal fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;
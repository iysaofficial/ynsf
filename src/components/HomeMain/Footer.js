import Link from "next/link";

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area footer-bg-2">
               <div className="footer__top pt-90 pb-50">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                              <div className="footer__widget-head mb-35">
                                 <Link href="/home">
                                    <a >
                                       <img src="assets/img/logo/ynsf.png" alt="" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__social mb-30">
                                    <h4>Follow our Socials</h4>
                                    <ul>
                                       <li><a href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                       <li><a href="https://www.instagram.com/iysa_official/" className="tw"><i className="fab fa-instagram"></i></a></li>
                                       <li><a href="https://www.facebook.com/people/Indonesia-Young-scientist-Association/100063979907207/" className="pin"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Products</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><a href="https://drive.google.com/drive/folders/1RUqrBHUH41rDZxhWWV1J_wm9SYqOZ_sA">Sertifikat Supervisors </a></li>
                                       <li><a href="https://drive.google.com/drive/folders/1Y5WFUar9rA7XpZhWvf2xMuTTlXfFxjrJ">Sertifikat Webinar </a></li>
                                       <li><a href="#">Final Result</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp footer__widget-pl-70" data-wow-delay=".7s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Link</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><a href="/gallery">Gallery </a></li>
                                       <li><a href="/contact">Contact</a></li>
                                       <li><a href="https://iysa.or.id/">Website</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp footer__widget-sub-pl-70" data-wow-delay=".7s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p>Subscribe to recieve a monthly email on the latest news!</p>
                                    <div className="footer__subscribe-input">
                                       <form action="#">
                                          <input type="email" placeholder="Email" />
                                          <button type="submit" className="m-btn">Subscribe!</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom">
                  <div className="container">
                     <div className="footer__bottom-inner footer__bottom-inner-2">
                        <div className="row">
                           <div className="col-xxl-6 col-xl-6 col-md-6">
                              <div className="footer__copyright footer__copyright-2 wow fadeInUp" data-wow-delay=".5s">
                                 <p>Copyright © 2022 All Rights Reserved, Design by <a href="#">Theme Pure</a></p>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-xl-6 col-md-6">
                              <div className="footer__bottom-link footer__bottom-link-2 wow fadeInUp text-md-end" data-wow-delay=".8s">
                                 <ul>
                                    <li><a href="#">Licence</a></li>
                                    <li><a href="#">Privacy Policy </a></li>
                                    <li><a href="#">Affiliate Notice</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
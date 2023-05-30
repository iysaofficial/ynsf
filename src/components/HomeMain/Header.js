import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useSticky from '../../hooks/useSticky';
import SidebarMenu from '../Sidebar/SidebarMenu';

const Header = () => {
   // sticky
   const { sticky } = useSticky();
   // handle sidebar show
   const [show, setShow] = useState(false);
   // handle close
   const handleClose = () => setShow(false);
   // handle sidebar show
   const handleShow = () => setShow(true);
   //   user
   const { user, logout } = useAuth();
   return (
      <>
         <header>
            <div className={sticky ? "sticky header__area header__shadow-2 white-bg header-transparent" :
               "header__area header__shadow-2 white-bg header-transparent"} id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="logo">
                           <Link href="homeMain">
                              <a >
                                 <img src="assets/img/logo/ynsf.png" alt="logo" />
                              </a>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                        <div className="main-menu d-flex justify-content-end h3_menu">
                           <nav id="mobile-menu">
                              <ul>
                                 {/* <li className="has-dropdown active">
                                    <Link href="/"><a >Home</a></Link>
                                    <ul className="submenu">
                                       <li><Link href="/"><a >Home Wordpress</a></Link></li>
                                       <li><Link href="/homeMain"><a >Home Plugins</a></Link></li>
                                       <li><Link href="/home-three"><a >Home Market</a></Link></li>
                                    </ul>
                                 </li> */}
                                 <li><Link href="/homeMain"><a >Home</a></Link></li>
                                 <li><Link href="/gallery"><a >Gallery</a></Link></li>
                                 <li className="has-dropdown">
                                    <Link href="/product">
                                       <a >Sertifikat</a>
                                    </Link>
                                    <ul className="submenu">
                                       <li><Link href="https://drive.google.com/drive/folders/1RUqrBHUH41rDZxhWWV1J_wm9SYqOZ_sA"><a>Supervisors</a></Link></li>
                                       <li><Link href="https://drive.google.com/drive/folders/1AEb6fgNAWCo-LH1jOlfWpMqLFkzqYwj5"><a>Webinar</a></Link></li>
                                    </ul>
                                 </li>
                                 {/* <li><Link href="/product"><a>HTML</a></Link></li>
                                 <li><Link href="/support"><a>Support</a></Link></li> */}
                                 <li className="has-dropdown">
                                    <Link href="/product">
                                       <a >Final Result</a>
                                    </Link>
                                    <ul className="submenu">
                                       <li><Link href="https://drive.google.com/file/d/1yMaEcny8sQ3lfJmcojpH_GuApyCE4AcN/view"><a >Final Result YNSF</a></Link></li>
                                       <li><Link href="https://drive.google.com/file/d/1W6wZC0PEkQLRx24Q6z5MYqlRu59azvkw/view"><a >IYSA Special Award</a></Link></li>
                                       <li><Link href="https://drive.google.com/file/d/1brupZ4HKN-gGwU00lb-1roGuMyj03L7N/view"><a >MIICA Special Award</a></Link></li>
                                       <li><Link href="https://drive.google.com/file/d/1iIyMFmw3YXz0WKtgBYijlCh9ej2ywTZi/view"><a >MYSO Special Award</a></Link></li>
                                       <li><Link href="https://drive.google.com/file/d/1urOjW4FJAo4bIn0zwxN0xc-S52ilpw2N/view"><a >WICO Award</a></Link></li>
                                    </ul>
                                 </li>
                                 {/* <li className="has-dropdown">
                                    <Link href="/product">
                                       <a >pages</a>
                                    </Link>
                                    <ul className="submenu">
                                       <li><Link href="/about"><a >About</a></Link></li>
                                       <li><Link href="/documentation"><a >Documentation</a></Link></li>
                                       <li><Link href="/cart"><a >Cart Page</a></Link></li>
                                       <li><Link href="/wishlist"><a >Wishlist</a></Link></li>
                                       <li><Link href="/checkout"><a >Checkout</a></Link></li>
                                       <li><Link href="/pricing"><a >Pricing</a></Link></li>
                                       <li><Link href="/sign-up"><a >Sign Up</a></Link></li>
                                       <li><Link href="/login"><a >Log In</a></Link></li>
                                    </ul>
                                 </li> */}
                                 {/* <li className="has-dropdown">
                                    <Link href="/blog"><a >Blog</a></Link>

                                    <ul className="submenu">
                                       <li><Link href="/blog"><a >Blog</a></Link></li>
                                       <li><Link href="/blog-details"><a >Blog Details</a></Link></li>
                                    </ul>
                                 </li> */}
                                 <li><Link href="/contact"><a >Contact</a></Link></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-8 col-6">
                        <div className="header__action d-flex align-items-center justify-content-end">
                           {/* <div className="header__login header__login-2 d-none d-sm-block">
                              {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Log Out</a> :
                                 <Link href="/login">
                                    < a> <i className="far fa-unlock"></i> Log In</a>
                                 </Link>}
                           </div>
                           <div className="header__btn d-none d-xl-block">
                              <Link href="/contact">
                                 <a className="m-btn m-btn-2">get started</a>
                              </Link>
                           </div> */}
                           <div className="sidebar__menu d-lg-none" onClick={handleShow}>
                              <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>


         <SidebarMenu show={show} handleClose={handleClose} />
      </>
   );
};

export default Header;
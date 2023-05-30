import Link from "next/link";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

const SidebarMenu = ({ show, handleClose }) => {
  const totalCartQuantity = useSelector(
    (state) => state.products.cartTotalQuantity
  );
  const { user, logout } = useAuth();
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            <div className="logo">
              <Link href="/home">
                <a>
                  <img src="assets/img/logo/ynsf.png" alt="logo" />
                </a>
              </Link>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="">
              <div className="">
                <div className="sidebar__content">
                  <div className="mobile-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <div className="single_link iconAdd ">
                          <li>
                            <Link href="/homeMain">
                              <a>Home</a>
                            </Link>
                          </li>
                        </div>
                        <div className="single_link iconAdd ">
                          <li>
                            <Link href="/gallery">
                              <a>Gallery</a>
                            </Link>
                          </li>
                        </div>
                        {/* <Collapsible trigger={<Link href="/home">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/home"><a >Home Wordpress</a></Link></li>
                                          <li><Link href="/homeTwo"><a >Home Plugins</a></Link></li>
                                          <li><Link href="/home-three"><a >Home Market</a></Link></li>
                                       </ul>
                                    </Collapsible> */}

                        <Collapsible
                          trigger={<Link href="/product">Sertifikat</Link>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            <li>
                              <Link href="https://drive.google.com/drive/folders/1RUqrBHUH41rDZxhWWV1J_wm9SYqOZ_sA">
                                <a>Supervisors</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://drive.google.com/drive/folders/1AEb6fgNAWCo-LH1jOlfWpMqLFkzqYwj5">
                                <a>Webinar</a>
                              </Link>
                            </li>
                          </ul>
                        </Collapsible>

                        {/* <div className="single_link iconAdd ">
                          <li>
                            <Link href="/product">
                              <a>HTML</a>
                            </Link>
                          </li>
                        </div>

                        <div className="single_link iconAdd">
                          <li>
                            <Link href="/support">
                              <a>Support</a>
                            </Link>
                          </li>
                        </div> */}

                        <Collapsible
                          trigger={<Link href="/product">Final Result</Link>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            <li>
                              <Link href="https://drive.google.com/file/d/1yMaEcny8sQ3lfJmcojpH_GuApyCE4AcN/view">
                                <a>Final Result YNSF</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://drive.google.com/file/d/1W6wZC0PEkQLRx24Q6z5MYqlRu59azvkw/view">
                                <a>IYSA Special Award</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://drive.google.com/file/d/1brupZ4HKN-gGwU00lb-1roGuMyj03L7N/view">
                                <a>MIICA Special Award</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://drive.google.com/file/d/1iIyMFmw3YXz0WKtgBYijlCh9ej2ywTZi/view">
                                <a>MYSO Special Award</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://drive.google.com/file/d/1urOjW4FJAo4bIn0zwxN0xc-S52ilpw2N/view">
                                <a>WICO Award</a>
                              </Link>
                            </li>   
                          </ul>
                        </Collapsible>

                        {/* <Collapsible
                          trigger={<Link href="/blog">Blog</Link>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            <li>
                              <Link href="/blog">
                                <a>Blog</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog-details">
                                <a>Blog Details</a>
                              </Link>
                            </li>
                          </ul>
                        </Collapsible> */}

                        <div className="single_link iconAdd border-0">
                          <li>
                            <Link href="/contact">
                              <a>Contact</a>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </nav>
                  </div>

                  <div className="sidebar__action d-flex align-items-center">
                    {/* <div className="sidebar__login mt-15">
                      {user?.email ? (
                        <a
                          onClick={logout}
                          style={{ cursor: "pointer" }}
                          className="d-flex align-items-center"
                        >
                          {" "}
                          <i className="fal fa-sign-out-alt"></i> Log Out
                        </a>
                      ) : (
                        <Link href="/login">
                          <a>
                            {" "}
                            <i className="far fa-unlock"></i> Log In
                          </a>
                        </Link>
                      )}
                    </div> */}
                     {/* <div className="sidebar__cart mt-20">
                        <Link href="/cart">
                           <a className="cart-toggle-btn">
                           <i className="far fa-shopping-cart"></i>
                           <span>{totalCartQuantity}</span>
                           </a>
                        </Link>
                     </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SidebarMenu;

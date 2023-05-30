import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificBlog } from "../../redux/features/blogSlice";
import BlogSideBar from "../Blog/BlogSideBar";

const BlogDetailsArea = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogItem = useSelector((state) => state.blogs.specificItem);
  //  dispatch
  const dispatch = useDispatch();
  return (
    <>
      <section className="page__title-area  pt-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-content mb-50">
                <div className="postbox__meta d-flex">
                  <div className="postbox__tag-2">
                    {/* <a href="#">Digital,</a>
                              <a href="#">Marketing. </a> */}
                    <a href="#">{blogItem.category}</a>
                  </div>
                  <div className="postbox__time">
                    <span>4 min read</span>
                  </div>
                </div>
                <h2 className="page__title">{blogItem.title}</h2>
                <div className="postbox__author-2 mt-20">
                  <ul className="d-flex align-items-center">
                    <li>
                      <h6>
                        <a href="#">{blogItem.name}</a>
                      </h6>
                      <span>
                        <a href="#">View Profile</a>
                      </span>
                    </li>
                    <li>
                      <h6>{blogItem.date}</h6>
                      <span>Published</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*postbox__area  */}
      <section className="postbox__area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper">
                <div className="postbox__thumb postbox__thumb-2 fix w-img mb-30">
                  <a href="#">
                    <img src={blogItem.img} alt="" />
                  </a>
                </div>
                <div className="postbox__details mb-30">
                  <p className="drop-cap">
                    KABAR BANTEN - Prestasi membanggakan ditorehkan para pelajar
                    SMAN CMBBS Pandeglang pada event Youth National Science Fair
                    atau disingkat YNSF 2023 yang diselenggarakan pada tanggal
                    8-12 Maret 2023 di Bali.
                  </p>
                  <p>
                    Tim Pelajar Peneliti Aleron Alpha dan Beta dari SMAN CMBBS
                    berhasil mengharumkan nama Provinsi Banten dengan
                    masing-masing meraih medali emas dan perunggu pada even
                    bergengsi tersebut.
                    <br /> Kepala SMAN CMBBS Edi Supriyanto, menyambut baik atas
                    prestasi yang ditorehkan anak didiknya pada even YNSF 2023
                    tersebut.
                  </p>
                </div>
                <div className="postbox__details mb-30">
                  <h4>Persiapan Tim SMAN CMBBS</h4>
                  <p>
                    Lembaga ini, kata dia, memiliki kemitraan dengan
                    kampus-kampus ternama di dalam dan di luar negeri. Tahun
                    ini, kedua even tersebut berlokasi di Universitas PGRI
                    Mahadewa Indonesia, Bali. Sementara Ratu Syahida Fitriyati
                    menjelaskan seluruh peserta yang mengikuti event ini
                    berjumlah 450 peserta, di dalamnya adalah peserta YNSF yang
                    merupakan pelajar dan mahasiswa dari dalam negeri maupun
                    dari luar negeri yaitu Malaysia, Vietnam, Thailand, dan
                    Turki. Tim Aleron Beta telah memulai penelitian sejak bulan
                    Desember 2022, dengan tema penelitian yaitu “Efektivitas ZnC
                    Filter dalam Mereduksi Gas CO yang Dihasilkan Kendaraan
                    Bermotor”. Tim Aleron Beta melaksanakan penelitian
                    bekerjasama dengan Dinas Perhubungan Kabupaten Pandeglang.
                    Begitupun dengan Tim Aleron Alpha, persiapan dan penelitian
                    dilakukan sejak bulan Desember 2022. Tema penelitian yang
                    diangkat adalah “Penggambaran Self Actualyzation dalam
                    Scrapbook sebagai Upaya Peningkatan Self Confidence dan Self
                    Efficasy pada Gen Z Dimasa Pasca Pandemi,” ujarnya. Humas
                    SMAN CMBBS Dadang Burhanudin mengatakan kedua tim berangkat
                    ke Bali pada Rabu, 8 Maret 2023. Setiba di lokasi lomba, tim
                    mengikuti kegiatan opening ceremony dan technical meeting
                    mengenai proses dan sistem penilaian pada perlombaan yang
                    akan dilaksanakan. Pada Kamis, 9 Maret 2023, tim melakukan
                    registrasi dan mendapat pembagian booth yang akan dijadikan
                    tempat presentasi hasil penelitian.
                  </p>
                </div>
                <div className="postbox__quote-2 mb-50">
                  <blockquote>
                    <h4>
                      "Kami sangat bangga terhadap Tim pelajar peneliti Aleron
                      Alpha dan Beta dari SMAN CMBBS berhasil mengharumkan nama
                      Provinsi Banten, dengan masing-masing meraih medali emas
                      dan perunggu," kata Edi Supriyanto Senin 13 Maret 2023.
                      Yustiandi dan Hj. Ratu Syahida Fitriyati sebagai pembina
                      mengatakan even YNSF 2023 merupakan ajang adu kemampuan
                      para peneliti muda berusia 13-20 tahun dalam
                      mempresentasikan hasil penelitian yang telah mereka
                      lakukan. "Even ini diikuti oleh pelajar dan mahasiswa dari
                      seluruh Indonesia. YNSF International Fair diselenggarakan
                      setiap tahun oleh Indonesia Young Science Association
                      (IYSA), yaitu lembaga yang bergerak dalam pengembangan
                      potensi, bakat, dan kreativitas pelajar dan mahasiswa
                      Indonesia,"
                    </h4>
                    <span>kata Yustiandi.</span>
                  </blockquote>
                </div>

                <div className="postbox__share m-social mb-80">
                  <h5>The share</h5>
                  <ul>
                    <li>
                      <a href="#" className="fb">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pin">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="postbox__author-3 d-sm-flex grey-bg-2 mb-85">
                  <div className="postbox__author-thumb-3 mr-20">
                    <img
                      src="assets/img/blog/author/blog-author-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="postbox__author-content">
                    <h4>Justin Case</h4>
                    <p>
                      James Bond cheers barney the little rotter I do not want
                      no agro gutted mate smashing cheeky pear shaped, mufty
                      super.
                    </p>
                  </div>
                </div> */}
                {/* <div className="postbox__recent mb-60">
                  <h4>Recent Posts</h4>

                  <div className="row">
                    {blogs.slice(4, 6).map((blog, index) => {
                      return (
                        <div
                          key={index}
                          className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
                        >
                          <div className="blog__single-2 white-bg mb-30">
                            <div className="blog__thumb-2 w-img mb-20">
                              <Link href="/blog-details">
                                <a>
                                  <img src={blog.img} alt="" />
                                </a>
                              </Link>
                            </div>
                            <div className="blog__content-2">
                              <div className="postbox__meta d-flex">
                                <div className="postbox__tag-2">
                                  <a href="#">Digital,</a>
                                  <a href="#">Marketing. </a>
                                </div>
                                <div className="postbox__time">
                                  <span>4 min read</span>
                                </div>
                              </div>
                              <h3 className="blog__title-2">
                                <Link href="/blog-details">
                                  <a
                                    onClick={() =>
                                      dispatch(specificBlog(blog.id))
                                    }
                                  >
                                    {blog.title.substring(0, 41)}...
                                  </a>
                                </Link>
                              </h3>
                              <p>
                                Jeffrey arse over tit give us a bell old posh
                                morish wellies cheeky.
                              </p>
                              <Link href="/blog-details">
                                <a className="link-btn">
                                  <i className="fal fa-arrow-right"></i>read
                                  more
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div> */}
                {/* <div className="latest-comments mb-55">
                  <h3>2 Comments</h3>
                  <ul>
                    <li>
                      <div className="comments-box grey-bg-2">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-15">
                            <img
                              src="assets/img/product/support/sup-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="avatar-name">
                            <h5>Jason Response</h5>
                            <span className="post-meta">
                              {" "}
                              March 24, 2020 at 12:23 pm
                            </span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            Up the duff a gosh cup of tea lemon squeezy bleeder
                            victoria sponge haggle, cheers wellies bugger hotpot
                            vagabond spiffing.!
                          </p>
                          <div className="comments-replay">
                            <a href="#">
                              <i className="fal fa-reply"></i>Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="comments-box grey-bg-2">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-15">
                            <img
                              src="assets/img/product/support/sup-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="avatar-name">
                            <h5>Hilary Ouse</h5>
                            <span className="post-meta">
                              April 06, 2021 at 06:19 pm{" "}
                            </span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            Nancy boy gutted mate smashing naff hanky panky grub
                            down the pub lost his bottle, cockup buggered.!
                          </p>
                          <div className="comments-replay">
                            <a href="#">
                              <i className="fal fa-reply"></i>Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="comment__wrapper p-relative white-bg">
                  <div className="comment__shape">
                    <img
                      className="circle"
                      src="assets/img/icon/sign/circle.png"
                      alt=""
                    />
                    <img
                      className="zigzag"
                      src="assets/img/icon/sign/zigzag.png"
                      alt=""
                    />
                    <img
                      className="dot"
                      src="assets/img/icon/sign/dot.png"
                      alt=""
                    />
                  </div>
                  <h3>Post a comment</h3>
                  <p>
                    {
                      "Jolly good bevvy butty it's all gone to pot that quaint so I said cheers."
                    }
                  </p>
                  <div className="comment__form mt-35">
                    <form action="#">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Full Name</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="Full name"
                              />
                              <i className="fal fa-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Work email</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="e-mail address"
                              />
                              <i className="fal fa-envelope"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Company Name</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="Company Name"
                              />
                              <i className="fal fa-smile"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Website</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="Website"
                              />
                              <i className="fal fa-globe"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Message</h5>
                            <div className="comment__input textarea">
                              <textarea
                                required
                                placeholder="Tell us a bil about your project"
                              ></textarea>
                              <i className="fal fa-comment"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <button type="submit" className="m-btn m-btn-4">
                            {" "}
                            <span></span> submit{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <BlogSideBar /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;

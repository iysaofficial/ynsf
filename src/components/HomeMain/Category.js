import Link from 'next/link';
import React from 'react';

const Category = () => {
   const tamplateData = [
      {
         id: 1,
         icon_img: "assets/img/icon/services/Img3.svg",
         bg_color: 'blue-bg-4',
         title: <h3 className="services__title"><a href="#">Life Science (LS)</a></h3>
      },
      {
         id: 2,
         icon_img: "assets/img/icon/services/Img4.svg",
         bg_color: 'pink-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Social Science (SS)</a></Link></h3>
      },
      {
         id: 3,
         icon_img: "assets/img/icon/services/Img2.svg",
         bg_color: 'green-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Environmental Science (ES)</a></Link></h3>
      },
      {
         id: 4,
         icon_img: "assets/img/icon/services/Img1.svg",
         bg_color: 'orange-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Innovation Science (IS)</a></Link></h3>
      },
      {
         id: 5,
         icon_img: "assets/img/icon/services/Img5.svg",
         bg_color: 'blue-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Engineering</a></Link></h3>
      },
   ]
   return (
      <>
         <section className="services__area pt-100 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title">Kategori Lomba</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     tamplateData.map(item => {
                        return <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="services__item white-bg mb-30 wow fadeinup" data-wow-delay=".3s">
                              <div className="services__icon mb-45">
                                 <span className={item.bg_color}>
                                    <img src={item.icon_img} alt="" />
                                 </span>
                              </div>
                              <div className="services__content">
                                 {item.title}
                                
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default Category;
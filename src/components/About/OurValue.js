import Link from "next/link";

const ourValue = [
   {
      id: 1,
      img: 'assets/img/icon/catagory/cat-1.png',
      title: 'Insightful',
      text: 'Sharpening the mind through knowledge sharing'
   },
   {
      id: 2,
      img: 'assets/img/icon/catagory/cat-2.png',
      title: 'Connection',
      text: 'Sharpening the mind through knowledge sharing'
   },
   {
      id: 3,
      img: 'assets/img/icon/catagory/cat-3.png',
      title: 'Empower',
      text: 'Sharpening the mind through knowledge sharing'
   },
   {
      id: 4,
      img: 'assets/img/icon/catagory/cat-4.png',
      title: 'Move Forward',
      text: 'Sharpening the mind through knowledge sharing' 
   },
]

const OurValue = () => {
   return (
      <>
         <section className="category__area pt-105 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h3 className="category__title"> Our Value</h3>
                        {/* <p>Find over 7000 website templates and themes.</p> */}
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     ourValue.map((ourValue, index) => {
                        return <div key={index} className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-25">
                                 <a href="#"><img src={ourValue.img} alt="" /></a>
                              </div>
                              
                           </div>
                              <div className="category__content text-center">
                                 <h2 className="category__title">
                                    <Link href="/product"><a >{ourValue.title}</a></Link>
                                 </h2>
                                 
                              </div>
                              <div className="category__content text-center">
                                 <p className="category__text">
                                    <Link href="/product"><a >{ourValue.text}</a></Link>
                                 </p>
                                 
                              </div>
                        </div>
                     })
                  }

               </div>
               {/* <div className="row">
                  <div className="col-xxl-12">
                     <div className="category__more mt-30 text-center">
                        <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> View all categories</a>
                        </Link>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
      </>
   );
};

export default OurValue;
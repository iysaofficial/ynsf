import Link from "next/link";

const OurValue = [
  {
    id: 1,
    img: "assets/img/logo/iysa.png",
    title: "Insightful",
    text: "Sharpening the mind through knowledge sharing",
  },
  {
    id: 2,
    img: "assets/img/logo/mahadewa.jpg",
    title: "Connection",
    text: "Sharpening the mind through knowledge sharing",
  },
  {
    id: 3,
    img: "assets/img/logo/undip.png",
    title: "Empower",
    text: "Sharpening the mind through knowledge sharing",
  },
  {
    id: 4,
    img: "assets/img/logo/ynsf.png",
    title: "Move Forward",
    text: "Sharpening the mind through knowledge sharing",
  },
];

const Organizer = () => {
  return (
    <>
      <section className="category__area pt-105 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h3 className="category__title"> Penyelenggara</h3>
                {/* <p>Find over 7000 website templates and themes.</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            {OurValue.map((OurValue, index) => {
              return (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-md-6 col-sm-6"
                >
                  <div
                    className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="category__icon mb-25">
                      <a href="#">
                        <img src={OurValue.img} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default Organizer;

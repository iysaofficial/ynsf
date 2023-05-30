
const Promotion = () => {

	return (
		<>
			<section className="promotion__area pt-10  grey-bg-3">
				<div className="container">
                <div className="promotion__count pt-50 pb-15 wow fadeInUp" data-wow-delay=".5s">
                           <div className="row">
                              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2">
                                 <div className="promotion__count-item text-center launche mb-30">
                                    <p>STARTUPS <br/> CREATED</p>
                                    <h4><span className="counter">40+</span></h4>
                                 </div>
                              </div>
                              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2">
                                 <div className="promotion__count-item text-center grey-bg-1 community mb-30">
                                    <p>SATISFIED <br/>CLIENTS</p>
                                    <h4><span className="counter">100</span>+</h4>
                                 </div>
                              </div>
                              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2">
                                 <div className="promotion__count-item text-center mission mb-30">
                                    <p>BUSINESS <br/>IMPECT</p>
                                    <h4><span className="counter">1M</span>+</h4>
                                 </div>
                              </div>
                              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2">
                                 <div className="promotion__count-item text-center mission mb-30">
                                    <p>NEW JOBS CREATED</p>
                                    <h4><span className="counter">800</span>+</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
				</div>
			</section>
		</>
	);
};

export default Promotion;
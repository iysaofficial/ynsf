import React from "react";
import SingleItem from "./SingleItem";

const NewestItems = () => {
  return (
    <>
      <section className="category__area pt-105 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">Gallery</h2>
              </div>
            </div>
          </div>
          <div className="new-product-tab">
            <nav>
              <div
                className="nav new-tab-wrapper justify-content-center mb-20"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-links active"
                  id="nav-all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-all"
                  type="button"
                  role="tab"
                  aria-controls="nav-all"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-links"
                  id="nav-wordpress-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-wordpress"
                  type="button"
                  role="tab"
                  aria-controls="nav-wordpress"
                  aria-selected="true"
                >
                  2022
                </button>

                <button
                  className="nav-links"
                  id="nav-template-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-template"
                  type="button"
                  role="tab"
                  aria-controls="nav-template"
                  aria-selected="false"
                >
                  2023
                </button>

              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
              >
                <div className="row justify-content-center g-0">
                  <div className="col-auto">
                    <SingleItem img="1" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="2" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="3" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="4" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="5" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="6" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="7" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="8" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="9" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="10" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="12" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="13" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="14" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="15" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="16" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="17" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="18" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="19" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="20" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="21" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="22" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="23" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="24" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="25" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="26" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="27" img_format="jpg" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="nav-wordpress"
                role="tabpanel"
                aria-labelledby="nav-wordpress-tab"
              >
                <div className="row justify-content-center g-0">
                <div className="col-auto">
                    <SingleItem img="1" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="2" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="3" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="4" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="5" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="6" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="7" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="8" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="9" img_format="jpg" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="nav-template"
                role="tabpanel"
                aria-labelledby="nav-template-tab"
              >
                <div className="row justify-content-center g-0">
                  <div className="col-auto">
                    <SingleItem img="10" img_format="jpg" />
                  </div>
                  
                  <div className="col-auto">
                    <SingleItem img="12" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="13" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="14" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="15" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="16" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="17" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="18" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="19" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="20" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="21" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="22" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="23" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="24" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="25" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="26" img_format="jpg" />
                  </div>
                  <div className="col-auto">
                    <SingleItem img="27" img_format="jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewestItems;

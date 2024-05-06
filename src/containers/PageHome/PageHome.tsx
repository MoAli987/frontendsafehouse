import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React, { useEffect } from "react";
import { TaxonomyType } from "data/types";
import SectionHero2 from "components/SectionHero2/SectionHero2"
import SectionVideos from "./SectionVideos";
import SectionGridFeatureProperty from "./SectionGridFeatureProperty";




function PageHome2() {
  // CUSTOM THEME STYLE
  useEffect(() => {
    // alert("homm")
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-cyan-blueGrey");
    return () => {
      $body.classList.remove("theme-cyan-blueGrey");
    };
  }, []);

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero2 className="" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Explore by types of stays d"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome2_s2"
        />


        <div className="relative py-16">

          <SectionGridFeatureProperty />
        </div>
        <SectionVideos />


        <section>
          <div className="deluxe-portion-parent mt-5 pt-3">
            <div className="text-center h2 font-weight-bold pt-5">Why Choose Us</div>
            <div className="container pb-5">
              <div className="row mt-5 pt-3">
                <div className="col-sm-4 p-0 text-center">
                  <center>
                    <img className="img-fluid text-center" src="https://cdn-icons-png.flaticon.com/512/4827/4827568.png" alt="" style={{ height: "100px" }} />
                  </center>
                  <br />
                  <div className="h5 font-weight-bold choose-line mt-3">Wide Range of Properties</div>
                  <div className="choose-line1 mb-3">Explore our diverse portfolio of properties, ranging from cozy urban apartments to luxurious countryside estates, catering to every lifestyle and preference</div>
                </div>

                <div className="col-sm-4 p-0 text-center">
                  <center>
                    <img className="img-fluid text-center" src="https://cdn-icons-png.flaticon.com/512/817/817729.png" alt="" style={{ height: "100px" }} />
                  </center>
                  <br />
                  <div className="h5 font-weight-bold choose-line mt-3">Financing Made Easy</div>
                  <div className="choose-line1 mb-3">Streamline your finances effortlessly with our user-friendly platform, simplifying everything from budgeting to investment management for financial peace of mind.</div>
                </div>
                <div className="col-sm-3 p-0 text-center">
                  <center>
                    <img className="img-fluid text-center" src="https://cdn.iconscout.com/icon/free/png-256/free-trust-1824306-1545955.png" alt="" style={{ height: "100px" }} />
                  </center>
                  <br />
                  <div className="h5 font-weight-bold choose-line mt-3">Trust by Thousands</div>
                  <div className="choose-line1 mb-3">Built on a foundation of trust, our services have garnered the loyalty of thousands, delivering reliability and integrity every step of the way.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PageHome2;

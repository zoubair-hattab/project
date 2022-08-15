import React from "react";
import SectionOne from "./sectionOne";
import SectionsTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
const Footer = () => {
  return (
    <div className="footer bg-gainsboro pt-4 pb-1 text-bodoni">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SectionOne />
          </div>
          <div className="col-md-3">
            <SectionsTwo />
          </div>
          <div className="col-md-3">
            <SectionThree />
          </div>
          <div className="col-md-3">
            <SectionFour />
          </div>
        </div>
        <div className="copy-right text-center mt-5">
          <p>&copy; 2022 Lena Instruments. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

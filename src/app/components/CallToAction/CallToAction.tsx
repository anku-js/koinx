import React from "react";
import "./CallToAction.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h3>Get Started with KoinX for FREE</h3>
      <p>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="cta-banner-img">
        <img src="/images/img5.png" alt="Call to action banner" />
      </div>
      <button>Get Started for FREE <FaArrowRightLong /></button>
    </div>
  );
};

export default CallToAction;

import React from "react";
import "./Page3.scss";
import Maps1 from "../../assets/images/Back/media-light-image 2.png";
import Maps2 from "../../assets/images/Back/media-light-image.png";
export const Page3 = () => {
  return (
    <div className="Page3Container">
      <div className="Page3Header">
        <h1>Our Solutions</h1>
        <h5>Connecting the cycling and alternative mobility modes</h5>
      </div>
      <div className="Page3Body">
        <div className="Page3Bodykiri">
          <div className="imageWrap">
            <img src={Maps1} />
          </div>
          <div className="BodyImage">
            <h3>Cycling as a Service</h3>
            <p>
              Enables B2B, B2C and individual customers to use <br />
              bike leasing and maintenance services as they wish,
              <br /> and allows access to optional mobility modes.
            </p>
            <button className="btnKhusus hide375"> MORE</button>
          </div>
        </div>
        <div className="Page3Bodykanan">
          <div className="imageWrap">
            <img src={Maps2} />
          </div>
          <div className="BodyImage">
            <h3>Cycling as a Service</h3>
            <p>
              Allows customers to book and pay for diverse mobility <br />{" "}
              options, and plan intermodal trips.
              <br />
              (subway, bus, taxi, scooter…)
            </p>
            <button className="btnKhusus hide375"> MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

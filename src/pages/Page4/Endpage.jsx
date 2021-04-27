import React from "react";
import ImageCall from "../../assets/images/Face/CallCenter.png";
import { Background } from "../../components/Background/Background";
import "./page4.scss";
export const Endpage = () => {
  return (
    <div className="EndPageWrapper">
      <Background />
      <div className="EndPageHead">
        <h1>
          " Always On<span className="text-green"> Support</span> "
        </h1>
      </div>

      <div className="EndPageBody">
        <div className="EndPageBot">
          <img className="InformationCards2" src={ImageCall} />
        </div>
        <div className="EndPageBot">
          <div className="InformationCards">
            <h1>
              {" "}
              <span className="text-green"> We have six </span>{" "}
              <span className="text-danger">"</span> 6{" "}
              <span className="text-danger">"</span> - account managers.
            </h1>
          </div>
          <div className="InformationCards">
            <h1>
              {" "}
              <span className="text-green"> Email support </span> -
              support@ultratelecom.net
            </h1>
          </div>

          <div className="InformationCards">
            <h1>
              {" "}
              <span className="text-green"> Phone Support </span> - +1 (307)
              200-8584
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

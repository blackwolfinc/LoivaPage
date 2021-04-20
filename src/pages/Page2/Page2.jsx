import React from "react";
import { Background } from "../../components/Background/Background";
import "./Page2.scss";
import pat1 from "../../assets/images/logos/Patner/pat1.png"
import pat2 from "../../assets/images/logos/Patner/pat2.png"
import pat3 from "../../assets/images/logos/Patner/pat3.png"
import pat4 from "../../assets/images/logos/Patner/pat4.png"
import pat5 from "../../assets/images/logos/Patner/pat5.png"
import { Crausel } from "../../components/User/Crausel/Crausel";
export const Page2 = () => {
  return (
    <div className="Page2Container">
      <Background />
      <div className="Page2Header">
        <h1>
          {" "}
          we believe in
          <span className="text-green "> BIG BANDWIDTH</span>
        </h1>
      </div>
      <div className="Page2Body">
            <div className="Page2BodyKiri">
                <img src={pat5}/>
            </div>
            <div className="Page2BodyKanan">
                <div className="page2BodyKananAtas">
                    <h1> UT’s     <span className="text-green "> global network</span>  is designed to get you there
                    <br/> faster, without the hassle of bandwidth limitations. </h1>
              </div>
                <div className="page2BodyKananTengah">
                    <div className="page2BodyKananTengah1">
                        <h1>100% <br/> unmetered bandwith </h1>
                    </div>
                    
                    <div className="page2BodyKananTengah3">
                        <h1>4 <br/>transit providers </h1>
                    </div>
                   
                    <div className="page2BodyKananTengah5">
                        <h1>5000 + <br/>global peers</h1>
                    </div>
                    {/* <Crausel/> */}
                </div>
                <div className="page2BodyKananBawah">
                    <div className="page2BodyKananBawahAtas">
                   <h1> <span className="text-green ">our partners</span></h1>
                    </div>
                    <div className="page2BodyKananBawahBawah">
                        <img src ={pat1}/>
                        <img src ={pat2}/>
                        <img src ={pat3}/>
                        <img src ={pat4}/>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

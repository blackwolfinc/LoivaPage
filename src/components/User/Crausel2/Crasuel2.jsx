import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCard,
  MDBCardImage,
 
} from "mdbreact";

import pat1 from "../../../assets/images/Face/Face1.jpg"
import pat2 from "../../../assets/images/logos/Patner/pat2.png"
import pat3 from "../../../assets/images/logos/Patner/pat3.png"
import pat4 from "../../../assets/images/logos/Patner/pat4.png"
import "./Crausel2.scss"
export const Crausel2 = () => {
  return (
    <div className="Crau2">

        <MDBCarousel
          activeItem={1}
          length={1}
          showControls={false}
          showIndicators={false}
          
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                {/* Card */}
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={pat1}
                    waves
                  />
                  <div className="CardInformation">
    <p>ahdjahkdjhaskhd</p>
                  </div>
           
                </MDBCard>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
  
    </div>
  );
};

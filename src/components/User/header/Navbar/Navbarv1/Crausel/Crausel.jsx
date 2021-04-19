import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

export const Crausel = () => {
  return (
    <div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                {/* Card */}
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle> <h1><span className="text-green "> CO</span>-LOCATION</h1></MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Click 3</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                {/* Card */}
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle> <h1>LEASE <span className="text-green "> IPV4</span></h1></MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Click 1</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                {/* Card */}
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle><h1>LEASE  SERVERS</h1></MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Click 2</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import iconCard1 from "../../../assets/images/logos/speedIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5">
              <MDBCol className="py-5">
           
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                <div className="TitelContainer">
                {/* <img src={iconCard1}/> */}
            <h1>we sell    <span className="text-green ">  high bandwidth</span> <br/> unmetered servers</h1>
          </div>
                </MDBCardTitle>
                <div className="SectionServe">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </span>{" "}
                always unmetered, go all out!
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMap} />
                </span>{" "}
                globally peered for performance
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faNetworkWired} />
                </span>{" "}
                global multi-site lan network
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faUsersCog} />
                </span>{" "}
                dedicated human support
              </li>
            </ul>
          </div>

                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;
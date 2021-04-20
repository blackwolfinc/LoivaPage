import { Background } from "../components/Background/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
  faGlobeEurope
  ,faServer
  ,faMapMarkedAlt
  ,faDatabase
  ,faArrowRight
} from "@fortawesome/free-solid-svg-icons";
// import Page
import NavbarV1 from "../components/User/header/Navbar/Navbarv1/NavbarV1";
// import Css
import "./Page1.scss";
import "./Responsive1016.scss";
import "./Responive826.scss";
import "./Responsive650.scss";
import "./Responsive510.scss";

// import Img
import iconCard1 from "../assets/images/logos/speedIcon.png";
import iconCard2 from "../assets/images/logos/IconCard2.png";
import Pilss from "../components/User/Pilss/Pilss";

export const Page1 = () => {
  return (
    <div className="MainContainer">
      <Background />
      <NavbarV1 />
      <div className="BodyContainer">
        <div className="SecContainer">
          <div className="TitelContainer">
            <h1>
              we sell <span className="text-green "> high bandwidth</span>{" "}
              <br /> unmetered servers
            </h1>
          </div>

          <div className="SectionCard">
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
            <img src={iconCard1} />
            <h1>98Gpbs Speed</h1>
          </div>
        </div>
        <div className="TrdContainer">
        
          <div className="ContainerButton">
          <h1 >How can  
          <span className="text-green "> we</span> help?</h1>
          
            <div className="CardKanan">
              <div className="CardKanan-img">
              <FontAwesomeIcon icon={faGlobeEurope} />
              </div>
              <div className="CardKanan-body">
                {" "}
                <h1> LEASE<span className="text-green ">IPV4</span><FontAwesomeIcon icon={faArrowRight } />
                </h1>
                <p>we support a wide range of usage cases</p>
              </div>
            </div>
            <div className="CardKanan">
              <div className="CardKanan-img">
             
              <FontAwesomeIcon icon={faServer} />
              </div>
              <div className="CardKanan-body">
                {" "}
                <h1>LEASE SERVERS <FontAwesomeIcon icon={faArrowRight } /></h1>
                <p>all our servers have unmetered bandwidth</p>
              </div>
            </div>
            <div className="CardKanan">
              <div className="CardKanan-img">
              <FontAwesomeIcon icon={faMapMarkedAlt } />
         
              </div>
              <div className="CardKanan-body">
                {" "}
                <h1>
                <span className="text-green "> CO</span>-LOCATION<FontAwesomeIcon icon={faArrowRight } />
               
              </h1>
           

              <p>host with us at any of our global locations</p>
              </div>
            </div>
            <div className="CardKanan">
              <div className="CardKanan-img">
              <FontAwesomeIcon icon={faDatabase } />
              
              </div>
              <div className="CardKanan-body">
                {" "}
                <h1>DATA ANALYTICS <FontAwesomeIcon icon={faArrowRight } /></h1>
              <p>gather and make sense of raw data</p>
              </div>
            </div>




          
          </div>
        </div>
      </div>
    </div>
  );
};

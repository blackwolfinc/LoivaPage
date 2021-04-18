import { Background } from "../components/Background/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
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
export const Page1 = () => {
  return (
    <div className="MainContainer">
      <Background />
      <NavbarV1 />
      <div className="BodyContainer">
        <div className="SecContainer">
          <div className="TitelContainer">
            <h1>we sell high bandwidth <br/> unmetered servers</h1>
          </div>
         
          <div className="SectionCard">
          
         <img src={iconCard1}/>
         <h1>98Gpbs Speed</h1>
          </div>
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
        </div>
        <div className="TrdContainer">
          <h1 className="TitleKanan">How can we help?</h1>
          <div className="ContainerButton">
            <div className="CardKanan">
             
                <h1>LEASE IPV4</h1>
           
              <p>we support a wide range of usage cases</p>
            </div>
            {/*  */}
            <div className="CardKanan">
             
                <h1>CO-LOCATION</h1>
              
              <p>host with us at any of our global locations</p>
            </div>
            {/*  */}
            <div className="CardKanan">
            
                <h1>LEASE SERVERS</h1>
             
              <p>all our servers have unmetered bandwidth</p>
            </div>
            {/*  */}
            <div className="CardKanan">
                <h1>DATA ANALYTICS</h1>
              <p>gather and make sense of raw data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

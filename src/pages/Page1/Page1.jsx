import { Background } from "../../components/Background/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
  faGlobeEurope,
  faServer,
  faMapMarkedAlt,
  faDatabase,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
// import Page
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
// import Css
import "./Page1.scss";
import "./Responsive1016.scss";
import "./Responive826.scss";
import "./Responsive650.scss";
import "./Responsive510.scss";

// import Img

export const Page1 = () => {
  return (
    <div className="MainContainer">
      <Background />
      <NavbarV1 />
      <div className="BodyContainer">
      
        <h1>Cycling and MaaS combined, <br/> giving you more than a bike</h1>
        <h4>Cycling as a Service for everyone, everywhere</h4>

        <button> GET THE APP</button>
    </div>
    </div>
  );
};

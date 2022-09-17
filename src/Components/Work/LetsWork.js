import "./LetsWork.css";
import Button from "../button/Button";
import Logo from "../../Components/Logo/Logo";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import Twitter from "../../Images/twitter.svg";
import { useNavigate } from "react-router-dom";

function LetsWork() {
  const navigate = useNavigate();
  return (
    <div className="lets-work-parent">
      <div className="work-talk">
        <h1>Let's work together</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <div className="letswork-button">
            <Button onClick={() => navigate("contact")}>Let's Talk</Button>
          </div>
        </div>
      </div>
      <div className="address-call-policy">
        <div className="social">
          <Logo color={"white"} />
          <div className="letswork-images">
            <img src={Instagram} width="27" height="27" />
            <img src={Twitter} width="27" height="27" />
            <img src={Facebook} width="27" height="27" />
          </div>
        </div>
        <div className="address">
          <h2>Address</h2>
          <p>0199 Taylor Park, North Dakota, USA</p>
        </div>
        <div className="call">
          <h2>Call us on</h2>
          <p>+1 98723 42023 info@logoipsum.com</p>
        </div>
        <div className="policy">
          <h2>Our policies</h2>
          <p>Privacy Policy </p>
          <p>Terms of Use </p>
          <p>Refund Policy</p>
        </div>
      </div>
      <div className="letswork-line"></div>
      <div className="copyright">Copyright © Webalar. All Rights Reserved</div>
    </div>
  );
}

export default LetsWork;

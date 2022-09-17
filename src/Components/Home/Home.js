import "./Home.css";
import Button from "../button/Button";
import homeImage from "../../Images/krisztian-tabori-IyaNci0CyRk-unsplash 1.jpg";
import TrustedCompanies from "../Services/TrustedCompanies";
import Services from "../Services/Services";
import OurWork from "../Work/OurWork";
import LetsWork from "../Work/LetsWork";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  const navigate = useNavigate();
  return (
    // Home Part
    <>
      <section className="home">
        <div className="home-content">
          <h1>Let's create something great together</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
            ultrices venenatis in. Sed elit aenean mattis vulputate aliquet
            vitae.
          </p>
          <div className="home-button">
            <Button onClick={() => navigate("contact")}>Let's Talk</Button>
          </div>
        </div>
        <div className="home-image">
          <LazyLoadImage src={homeImage} height="450" width="580" />
        </div>
      </section>
      <section className="trusted-companies-services">
        <TrustedCompanies />
        <div className="service-parent">
          <Services />
        </div>
      </section>
      <OurWork />
      <LetsWork />
    </>
  );
}

export default Home;

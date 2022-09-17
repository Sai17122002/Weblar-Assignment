import "./Services.css";
import Rectangle1 from "../../Images/Rectangle 14.png";
import Rectangle2 from "../../Images/Rectangle 14 (1).png";
import Ellipse from "../../Images/Ellipse 5.png";

function Services() {
  return (
    <>
      <div className="services-content">
        <h1 className="our-services">Our services that we provide</h1>
        <p className="our-services-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
          libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
          arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra
          diam arcu massa amet non metus ornare.
        </p>
      </div>
      <div className="design-development-marketing">
        <div className="design">
          <img loading="lazy" src={Rectangle1} width="93" height="61" />
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <div className="line"></div>
        </div>
        <div loading="lazy" className="development">
          <img src={Rectangle2} width="93" height="61" />
          <h2>Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <div className="line"></div>
        </div>
        <div className="marketing">
          <img loading="lazy" src={Ellipse} width="70" height="61" />
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;

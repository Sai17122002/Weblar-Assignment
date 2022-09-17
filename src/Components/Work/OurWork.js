import "./OurWork.css";
import Rectangle15 from "../../Images/Rectangle 15.png";
import Arrow from "../../Images/circle-right-regular.svg";
import Button from "../button/Button";

function OurWork() {
  return (
    <div className="our-work">
      <h1>Our Works</h1>
      <div className="works-list">
        <div className="project">
          <img loading="lazy" src={Rectangle15} height="350" width="400" />
          <div className="project-details-parent">
            <div className="project-details">
              <h2>Project 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img loading="lazy" src={Arrow} height="50" width="50" />
          </div>
        </div>
        <div className="project">
          <img loading="lazy" src={Rectangle15} height="350" width="400" />
          <div className="project-details-parent">
            <div className="project-details">
              <h2>Project 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img loading="lazy" src={Arrow} height="50" width="50" />
          </div>
        </div>
        <div className="project">
          <img loading="lazy" src={Rectangle15} height="350" width="400" />
          <div className="project-details-parent">
            <div className="project-details">
              <h2>Project 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img loading="lazy" src={Arrow} height="50" width="50" />
          </div>
        </div>
      </div>
      <div className="work-button">
        <Button>View More</Button>
      </div>
    </div>
  );
}

export default OurWork;

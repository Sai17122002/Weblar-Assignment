import "./Contact.css";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import Twitter from "../../Images/twitter.svg";
import LetsWork from "../Work/LetsWork";

function Contact() {
  return (
    <>
      <div className="contact-parent">
        <h1>Connect With Us</h1>
        <div className="contact-about-project">
          <div className="about-project">
            <h2>Tell Us About Your Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              lobortis mi vulputate potenti orci.lobortis mi vulputate potenti
              orci.
            </p>
            <form>
              <label>Your Name</label>
              <input className="name-input" />
              <div className="email-phone">
                <div className="email">
                  <label>Your Email</label>
                  <input />
                </div>
                <div className="phone">
                  <label>Your Phone Number</label>
                  <input />
                </div>
              </div>
              <label>Your Message</label>
              <textarea class="message-input" rows="10" cols="70"></textarea>
            </form>
          </div>
          <div className="contact-address-call-policy">
            <div className="address">
              <h2>Address</h2>
              <p>0199 Taylor Park, North Dakota, USA</p>
            </div>
            <div className="call">
              <h2>Call us on</h2>
              <p>+1 98723 42023 info@logoipsum.com</p>
            </div>
            <div className="contact-social-media">
              <img src={Instagram} width="27" height="27" />
              <img src={Twitter} width="27" height="27" />
              <img src={Facebook} width="27" height="27" />
            </div>
          </div>
        </div>
      </div>
      <LetsWork />
    </>
  );
}

export default Contact;

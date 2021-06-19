import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="background-1">
    <div className="main-1">
      <div className="heading-1">Contact Us</div>
      <div className="details-1">
        <div className="address-1">
          <div className="sub-1">
            <h4>Address</h4>
            <p className="p-1">4671 sugar camp road, 55060</p>
          </div>
          <div className="sub-1">
            <h4>Phone</h4>
            <p className="p-1">123-456-7890</p>
          </div>
          <div className="sub-1">
            <h4>Email</h4>
            <p className="p-1">wreb123@gmail.com</p>
          </div>
        </div>
        <div className="message-1">
          <h3 className="send-1">Send Message</h3>
          <form method="" action="">
            <input className="input-1" type="text" name="name" placeholder="Full Name" required/>
            <input className="input-1" type="email" name="email" placeholder="Email" required/>
            <input className="input-1" type="text" name="message" placeholder="Type your Message" required/>
            <input className="submit-1" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;

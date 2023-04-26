import React from "react";
import './contact.css'
const Contact = () => {

  function handleClick() {
    alert("Message sent successfully")
  }
  return (
    <div className="contact">
      <h3>Contact us</h3>
     
        
          <form className="contact-form" action="">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea
              name="message"
              id=""
              cols="40"
              rows="6"
              placeholder="Type your message"
            ></textarea>
            <button onClick={handleClick}>Send</button>
          </form>
       
    

    </div>
  );
};

export default Contact;

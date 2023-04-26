import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <br />
      <div className="content">
        <div className="text">
          <p>
            Welcome to <span>Contactify</span> - your go-to platform for tech
            experts. Our team is dedicated to providing you with the tools and
            resources you need to streamline your communication process and
            connect with your audience more effectively.
            <br />
            <br />
            Whether you're looking to build a simple contact form for your
            personal website or a complex survey for your business, we provide a
            curated list of experts in tech who can help you with everything
            from website development to marketing and branding.
            <br />
            <br />
            Our experts are handpicked based on their experience, expertise, and
            commitment to providing exceptional service, and we're confident
            that they can help you take your online presence to the next level.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-80776.jpg?size=626&ext=jpg&uid=R100751606&semt=robertav1_2_sidr"
          alt=""
        />
      </div>
    </div>
  );
}

export default About
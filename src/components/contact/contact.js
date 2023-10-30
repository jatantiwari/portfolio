import React from 'react';
import './contact.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'

const Contact = () => {
  return (
   <section className="contactPage">
    <div id="clients">
        <h1 className="clientTitle">My Client</h1>
        <p className="clientDesc">My clients with whom I learned many things</p>
        <div className="clientImgs">
            <p>you can be my first client</p>
        </div>
    </div>
    
    <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">please fill the form to contact me</span>
        <form action="" className="contactForm" >
            <input type="text" name="user_name" className="name" placeholder='Your Name' required/>
            <input type="email" name="user_email" className="email" placeholder='Your Email' required/>
            <textarea name="message" id=""  rows="5" className="message" placeholder="Your Message"></textarea>
            <button type = "submit" className="submitBtn">Send</button>
            <div className="links">
                <img src={linkedin}alt="linkedin" className="link" />
                <img src={instagram} alt="instagram" className="link" />
                <img src={github} alt="github" className="link" />
                <img src={gmail} alt="gmail" className="link" />
            </div>
        </form>

    </div>
   </section>
  )
}

export default Contact
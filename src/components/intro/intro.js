import React from 'react'
import './intro.css'
import photo from '../../assets/photo.png'
import {Link }from 'react-scroll'
import hireme from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I am <span className="introName">Jatan Tiwari</span><br/>Full Stack Developer</span>
          <p className="introPara">I am skill developer worked on many live projects</p>
          <Link className="hireMe">
            <button className="btn">
              <img src={hireme} alt="hireme" className="hireImg" />
            Hire Me
            </button>
            
          </Link>
        </div>
        <img src={photo} alt="photo" className="photo" />
    </section>
  )
}

export default Intro
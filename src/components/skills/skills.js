import React from 'react'
import './skills.css'
import website from '../../assets/website.png'
import app from '../../assets/app.png'

const Skills = () => {
  return (
    <section className="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am skilled full stack developer</span>
        <dic className="skillBars">
            <div className="skillBar">
                <img src={website} alt="WebDesign" className="skillBarImage" />
                <div className="skillbarText">
                    <h2>Website Design</h2>
                    <p>I have developed many Websites</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={app} alt="AppDesign" className="skillBarImage" />
                <div className="skillbarText">
                    <h2>App Design</h2>
                    <p>I have developed many apps</p>
                </div>
            </div>
        </dic>
    </section>
  )
}

export default Skills
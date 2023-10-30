import React from 'react'
import './works.css' 
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'
const Works = () => {
  return (
    <section id="works">
        <h2 className="workTitle">My Portfolio</h2>
        <span className="wordDesc">I have created this projects</span>
        <div className="workImgs">
            <img src={portfolio1} alt="calculator" className="workImg" />
            <img src={portfolio2} alt="charApp" className="workImg" />
            <img src={portfolio3} alt="networkMarketing" className="workImg" />
            <img src={portfolio4} alt="TextEditor" className="workImg" />
            <img src={portfolio5} alt="renews" className="workImg" />
            <img src={portfolio6} alt="school management system" className="workImg" />

        </div>
        <button className="moreBtn">See More</button>

    </section>
  )
}

export default Works
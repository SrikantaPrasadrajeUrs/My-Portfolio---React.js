import React from 'react'
import Style from './Styles/education.module.css'
import collage from "../Assets/images/collage.png"
import school from "../Assets/images/school.png"
import degree from "../Assets/images/smiling gradute.png"
const Education = () => {

  return (
    <div id={Style.education}>
      <hr />
      <h1 align="center">EDUCATION</h1>
      <div id={Style.contents}>
        <div className={Style.school}>
          <div className={Style.firstrow}>   <h2>High School</h2>
            <img width={60} height={60} src={school} alt="" /></div>
          <p>10th from Sarvoday High School (BGS) in 2016 with percentage of 81.12%. Karnataka Board.</p></div>
        <div className={Style.school}>
          <div className={Style.firstrow}>   <h2>Collage</h2>
            <img width={60} height={60} src={collage} alt="" /></div>
          <p>12th from Saradha Vilas PU College in 2018 with percentage of 77.83 %. Karnataka Board.</p>
        </div>
        <div className={Style.school}>
          <div className={Style.firstrow}>   <h2>Bachelor's</h2>
            <img width={60} height={60} src={degree} alt="" /></div>
          <p>B.E-B.E in Mechanical Engineering from Vidya Vikas Institute of Engineering and Technology in 2023, Mysore with 61.10%. VTU.</p>
        </div>
      </div>
    </div>


  )
}

export default Education
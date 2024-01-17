import React from 'react'
import Style from "./Styles/mainpage.module.css"
import yourImage from "../Assets/images/my-img1-removebg-preview.png";
import linkdln from "../Assets/images/linkdln.png"
import insta from "../Assets/images/insta.png"
import github from "../Assets/images/git.webp"
import download from "../Assets/images/download.gif"
const Mainpage = () => {
  return (
    <div id={Style.main}>
      <div id={Style.outside}> <aside>
        <img src={yourImage} alt="" />
      </aside></div>
      <div className={Style.hiremebtn}>
        <div id={Style.wrapper}>
          <a href="https://srikantaprasadrajeurs456@gmail.com"><span>Hire Me</span></a>
        </div>
      </div>
      <div className={Style.description}>
                    <h1>HELLO...</h1>
                    <h3>I am SRIKANTAPRASADRAJE URS</h3>
                    <p>Fuelled by a deep passion for <span id="coding">&lt;/coding&gt;</span></p>
                </div>
                <div className={Style.social}>
                    <a href="https://www.linkedin.com/in/srikantaprasadraje-urs-83bb11286/"><img src={linkdln} alt=""  id={Style.link}/></a>
                    <a href="https://github.com/SrikantaPrasadrajeUrs"><img src={github} alt=""/></a>
                    <a href=""><img src={insta} alt=""/></a>
                    <a href="https://drive.google.com/file/d/12dRKWYhWTiX5bXOXEpSjLZy1CaNpUoIn/view?usp=drive_link"><img src={download} alt="" id={Style.giff}/></a>
                </div>
    </div> 
  )
}

export default Mainpage
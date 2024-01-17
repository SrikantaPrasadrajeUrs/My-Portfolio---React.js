import React from 'react'
import Style from "./Styles/contact.module.css"
import github from "../Assets/images/git.webp"
import download from "../Assets/images/download.gif"
import linkdln from "../Assets/images/linkdln.png"
const Contact = () => {
    return (
        <div id={Style.contact}>
            <hr />
            <h1 align="center">CONTACT</h1>
            <div id={Style.contactblock}>
                <div className={Style.content}> <h2>Gmail: </h2> <p>srikantaprasadrajeurs456@gmail.com</p></div>
                <div className={Style.content}> <h2>Phone: </h2> <p>+91 7892200860</p></div>
                <div className={Style.content}> <h2>Home: </h2> <p>#1295 Srirampura 2nd stage 2nd cross mysore 570023, Karnataka, India</p></div>
                <div className={Style.content}> <h2>Cureent adress: </h2> <p>BTM layout 2nd stage jp nagar baneergatta road 570067, <br /> Bangalore, Karnataka, India</p></div>
                <div className={Style.content}><img width={52} height={52} src={linkdln} alt="" /> <p><a href="https://www.linkedin.com/in/srikantaprasadraje-urs-83bb11286/">https://www.linkedin.com/in/srikantaprasadraje-urs-83bb11286/</a></p></div>
                <div className={Style.content}><img width={50} height={50} src={github} alt="" /> <p><a href="https://github.com/SrikantaPrasadrajeUrs">https://github.com/SrikantaPrasadrajeUrs</a></p></div>
                <div className={Style.content}><img width={50} height={50} src={download} alt="" id={Style.giff}/> <p><a href="https://drive.google.com/file/d/12dRKWYhWTiX5bXOXEpSjLZy1CaNpUoIn/view?usp=drive_link">Resume link</a></p></div>
            </div>
        </div>
    )
}

export default Contact
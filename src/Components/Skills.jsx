import React from 'react'
import Style from "./Styles/skills.module.css"
import javaimg from "../Assets/images/javalogo.jpg"
import sqlimg from "../Assets/images/oracle sql.png";
import webdev from "../Assets/images/html-css-javascript-react.jpg"
const Skills = () => {
  return (
    <div id={Style.skills}>
      <hr />
        <h1 align="center">Skills</h1>
        <div className={Style.skillblock}>
          <div className={Style.firstpart}>
          <img width={250} height={210}  src={javaimg} alt="" />
          <h3 align="center">Core Java</h3></div>
          <hr />
        <ul> 
          <li><h4>Object oriented programming</h4></li>
          <li><h4>Encapsulation</h4></li>
          <li><h4>Inheritance</h4></li>
          <li><h4>Abstraction</h4></li>
          <li><h4>Multithreading</h4></li>
          <li><h4>Collection framework</h4></li>
          <li><h4 id={Style.white}>Hibernate Framework</h4></li>
          <li><h4 id={Style.white}>Data Structures and Algorithm</h4></li>
          </ul>
          <hr />
          <div className={Style.secondpart}>
            <h1>Rating</h1>
            <h2>9.0/10</h2>
          </div>
        </div>
        <div className={Style.skillblock2}>
          <div className={Style.firstpart}>
          <img width={250} height={210}  src={sqlimg} alt="" />
          <h3 align="center">Oracle SQL</h3></div>
          <hr />
        <ul> 
          <li><h4>Normalization</h4></li>
          <li><h4>Function</h4></li>
          <li><h4>Psuedo Column</h4></li>
          <li><h4>DDL (Data Defination Language)</h4></li>
          <li><h4>DQL (Data Query Language)</h4></li>
          <li><h4>DML (Data Manupulation Language)</h4></li>
          <li><h4>TCL (Transaction Control Language)</h4></li>
          <li><h4>DCL (Data Control Language)</h4></li>
          </ul>
          <hr />
          <div className={Style.secondpart}>
            <h1>Rating</h1>
            <h2>8.5/10</h2>
          </div>
        </div>
        <div className={Style.skillblock}>
          <div className={Style.firstpart3}>
          <img width={250} height={210}  src={webdev} alt="" />
          <h3 align="center">Web Development</h3></div>
          <hr />
          <ul id={Style.contentpart3}> 
          <li><h4>HTML5</h4></li>
          <li><h4>CSS3</h4></li>
          <li><h4>Javascript</h4></li>
          <li><h4>React.js</h4></li>
          <li><h4>Basic Bootstrap</h4></li>
          </ul>
          <hr />
          <div className={Style.secondpart}>
            <h1>Rating</h1>
            <h2>8.0/10</h2>
          </div>
        </div>
    </div>
  )
}

export default Skills
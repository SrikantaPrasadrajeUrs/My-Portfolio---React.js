import React, { useContext, useRef } from 'react'
import Style from "./Components/Styles/navbar.module.css"
import Styles from "./Components/Styles/App.module.css"
import Education from './Components/Education'
import yourImage from "./Assets/images/code-img-navbar1.png";
import arrow from "./Assets/images/8666578_arrow_up_circle_icon.png"
import Mainpage from './Components/Mainpage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
const App = () => {
  let ref1 = useRef();
  let ref2 = useRef();
  let skillref = useRef();
  let projectRef=useRef();
  let contactref=useRef();
  let scrollBro = (ele) => {
    if (ele.current != null)
      window.scrollTo({
        top: ele.current.offsetTop,
        behavior: 'smooth'
      });
  }
  let scrollHome = (ele) => {
    if (ele.current != null)
      window.scrollTo({
        top: ele.current.offsetTop,
        behavior: 'smooth'
      });
  }
  return (
    <div>
      <nav ref={ref2} id={Style.nav} >
        <div className={Style.navbar}>
          <img width={100} height={80} src={yourImage} alt="" />
          <div className={Style.contents}>
            <h2 >Home</h2>
            <h2 onClick={() => { scrollBro(ref1) }}>Education</h2>
            <h2 onClick={() => { scrollBro(skillref) }}>Skills</h2>
            <h2 onClick={() => { scrollBro(projectRef) }}>Projects</h2>
            <h2 onClick={() => { scrollBro(contactref) }}>Contact</h2>
          </div>
        </div>
      </nav>
      <Mainpage />
      <div id={Styles.stick}>
        <h1 onClick={() => { scrollHome(ref2) }} > <img src={arrow} alt="" /> </h1>
      </div>
      <div ref={ref1}><Education /></div>
      <div ref={skillref}> <Skills /></div>
      <div ref={projectRef} > <Projects/> </div>
      <div ref={contactref}> <Contact/></div>
    </div>
  )
}

export default App
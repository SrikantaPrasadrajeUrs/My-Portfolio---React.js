import React from 'react'
import Styles from "./Styles/projects.module.css"
import jdbc from "../Assets/images/java to mysql.png"
import hibernate from "../Assets/images/hibernate-java.jpg"
import reactdashboard from "../Assets/images/dashboardimage.png"
import loginpage from "../Assets/images/login-page.jpg"
import todolist from "../Assets/images/todolist.jpg" 

const Projects = () => {
    return (
        <div id={Styles.projects}>
            <hr />
            <h1 align="center">PROJECTS</h1>
            <div className={Styles.projectblock}>
                <div className={Styles.firstpart}><img width={250} height={210} src={jdbc} alt="" />
                <h2 align="center">Bank Application</h2></div>
                <article>
                  <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        provident laudantium dolores facere odio, nesciunt qui repellat
                        necessitatibus asperiores quis voluptatem eaque alias impedit?
                        Dignissimos possimus voluptas cupiditate molestiae amet!</p>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>Java</li>
                        <li>JDBC (Java database connectivity)</li>
                        <li>Object oriented programming</li>
                        <li>SQL</li>
                    </ul>
                    <a href="https://github.com/SrikantaPrasadrajeUrs/Bank-Application-with-MySQL-Integration">Project Link</a>
                </article>
            </div>
            <div className={Styles.projectblock2}>
                <div className={Styles.firstpart2}><img width={250} height={210} src={hibernate} alt="" />
                <h2 align="center">Simple-Hibernate-project- <br /> Merchant-Product</h2></div>
                <article>
                  <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        provident laudantium dolores facere odio, nesciunt qui repellat
                        necessitatibus asperiores quis voluptatem eaque alias impedit?
                        Dignissimos possimus voluptas cupiditate molestiae amet!</p>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>Java</li>
                        <li>Hibernate</li>
                        <li>POJO</li>
                        <li>Design Pattern</li>
                        <li>SQL</li>
                    </ul>
                    <a href="https://github.com/SrikantaPrasadrajeUrs/Simple-Hibernate-project-Merchant-Product">Project Link</a>
                </article>
            </div>
            <div className={Styles.projectblock}>
                <div className={Styles.firstpart}><img width={250} height={210} src={reactdashboard} alt="" />
                <h2 align="center">Dashboard</h2></div>
                <article>
                  <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        provident laudantium dolores facere odio, nesciunt qui repellat
                        necessitatibus asperiores quis voluptatem eaque alias impedit?
                        Dignissimos possimus voluptas cupiditate molestiae amet!</p>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                    </ul>
                    <a href="https://srikantaprasadrajeurs.github.io/Dashboard-ReactJs/">Project Link</a>
                </article>
            </div>
            <div className={Styles.projectblock2}>
                <div className={Styles.firstpart2}><img width={250} height={210} src={loginpage} alt="" />
                <h2 align="center">Simple login page</h2></div>
                <article>
                  <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        provident laudantium dolores facere odio, nesciunt qui repellat
                        necessitatibus asperiores quis voluptatem eaque alias impedit?
                        Dignissimos possimus voluptas cupiditate molestiae amet!</p>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <a href="https://srikantaprasadrajeurs.github.io/login_page/">Project Link</a>
                </article>
            </div>
            <div className={Styles.projectblock}>
                <div className={Styles.firstpart}><img width={250} height={210} src={todolist} alt="" />
                <h2 align="center">TO - DO List </h2></div>
                <article>
                  <h3>Project Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        provident laudantium dolores facere odio, nesciunt qui repellat
                        necessitatibus asperiores quis voluptatem eaque alias impedit?
                        Dignissimos possimus voluptas cupiditate molestiae amet!</p>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <a href="https://srikantaprasadrajeurs.github.io/TO-DO-LIST/">Project Link</a>
                </article>
            </div>
            <div id={Styles.lastdiv}> 
                <h2 align="center">For more Projects please visit my github profile - Thankyou</h2>
                <a href="https://github.com/SrikantaPrasadrajeUrs">Project Link</a>
                </div>
        </div>
    )
}

export default Projects
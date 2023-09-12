import React from "react";
import MyResume from "../../assets/files/Cullen_Knott_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiServer } from "react-icons/bi";
import { SiPagespeedinsights } from "react-icons/si";

function Resume() {
  return (
    <div>
        <section id="resume-page" className="resume-download">
            <div className="flex-row">
                <h2 className="title">My Resume</h2>
            </div>
            <div className="flex-row">
                <div className="download-info">
                    <div className="download">
                        <a href={MyResume} className="logo" download>
                            <AiOutlineDownload />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="home-body-page" className="resume-body">
            <div className="article column1">
                <p className="column-title">Front-End</p>
                <p className="column-text">
                    <ul>
                        <li className="logo">
                            <CgWebsite />
                        </li>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Materialize</li>
                        <li>Bootstrap</li>
                        <li>GIT</li>
                    </ul>
                </p>
            </div>
            <div className="article column2">
                <p className="column-title">Performance</p>
                <p className="column-text">
                    <ul>
                        <li className="logo">
                            < SiPagespeedinsights/>
                        </li>
                        <li>MERN</li>
                        <li>Mongoose</li>
                        <li>GraphQl</li>
                        <li>React</li>
                        <li>Jest</li>
                        <li>State</li>
                        <li>Progressive Web App (PWA)</li>
                    </ul>
                </p>
            </div>
            <div className="article column3">
                <p className="column-title">Back-End</p>
                <p className="column-text">
                    <ul>
                        <li className="logo">
                            < BiServer/>
                        </li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Sequalize</li>
                        <li>Model-View-Controller (MVC)</li>
                        <li>NoSQL</li>
                        <li>Object-Relational Mapping (ORM)</li>
                        <li>Express</li>
                        <li>Node.js</li>
                    </ul>
                </p>
            </div>
        </section>
    </div>
  )
}

export default Resume;

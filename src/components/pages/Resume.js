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
    </div>
  )
}

export default Resume;

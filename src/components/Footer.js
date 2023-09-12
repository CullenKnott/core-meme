import React from "react";
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from 'react-icons/ri'


function Footer() {
    return (
        <footer>
            <h2>Built with React | Made by Cullen Knott©</h2>
            <p>
                <ul>
                    <a href="https://github.com/CullenKnott">
                        <li className="logo">
                            <VscGithubAlt />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/cullen-knott-7a08371a3/">
                        <li className="logo">
                            < AiOutlineLinkedin />
                        </li>
                    </a>
                    <a href="https://twitter.com/CullenKnott">
                        <li className="logo">
                            <RiTwitterXLine />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    )
}

export default Footer;
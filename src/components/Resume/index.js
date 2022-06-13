import React from 'react';

function Resume() {
    return (
        <section id="resume" className="resume">
            <h2 className="section-title">My Resume</h2>
            <h3>Skills</h3>
            <h4>Front-end</h4>
            <ul>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>JavaScript / JQuery</li>
                <li>Web and Server-side API's</li>
                <li>React.js</li>
            </ul>
            <h4>Back-end</h4>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MERN stack</li>
                <li>SQL and NoSQL</li>
            </ul>
            <a id="resume_download" href={require("../../assets/pdfs/my_resume.pdf")} download>Download My Resume</a>
        </section>
    )
}

export default Resume;
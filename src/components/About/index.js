import React from 'react';
import about_photo from '../../assets/images/holdan.jpg';

function About() {
    return (
        <section id="about-me" className="about-me">
            <h2 className="section-title">About Me</h2>
            <div className="about-display">
                <img src={about_photo} alt="a portrait of Holdan McMullen" title="Holdan McMullen" />
                <p>
                    My name is Holdan McMullen and grew up in beautiful Salt Lake City, Utah. I am the second oldest out of six children and enjoy helping others. I opened up my first website in the late spring of 2007 and wanted to learn more about web design. Instead of taking any courses or going to school for the subject, I spent the next few years teaching myself how to code HTML, CSS, and a little bit of JavaScript. I am very thankful the internet is gifted with endless resources and materials in learning anything your heart desires.
                </p>
                 <br />
                 <p>
                    Today, I am currently taking a boot camp in full-stack web development. I'm hoping to expand my knowledge of front-end development and learn back-end languages in the process. My dream is to become a full-stack web developer and help others achieve their dreams by building their businesses from the ground up with the help of web marketing.
                 </p>
                 <br />
                 <p>
                     Below is an example of my early works during the time I self-taught myself how to develop websites.
                 </p>
            </div>
            <div className="likes-dislikes">
                <div className="likes">
                    <h3>What I Like</h3>
                    <ul>
                        <li>Video games</li>
                        <li>Helping others</li>
                        <li>Spending time with family</li>
                        <li>Learning new things</li>
                    </ul>
                </div>
                <div className="dislikes">
                    <h3>What I Dislike</h3>
                    <ul>
                        <li>Unpredictable events</li>
                        <li>Having no time for things</li>
                        <li>Cold weather</li>
                        <li>Experiencing pain</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;
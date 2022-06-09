import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <div class="toolbar">
                    <h1>Holdan <span class="logo">J</span> McMullen</h1>
                    <nav>
                        <ul class="navlinks">
                            <li><a href="#top">Home</a></li>
                            <li><a href="#about-me">About Me</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact-me">Contact Me</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="top" class="main">
                <h2 id="main-title">A Full Stack Web Developer</h2>
            </section>
        </div>
    )
}

export default Header;
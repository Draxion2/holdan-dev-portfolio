import React from 'react';

function Footer() {
    return (
        <footer>
            <div id="footer-home">
                <a href="#top" title="Return Home">
                    Home
                </a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://github.com/Draxion2" target="_blank" title="GitHub">
                    GitHub
                </a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/holdan-mcmullen-0754b9aa/" target="_blank" title="LinkedIn">
                    LinkedIn
                </a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://www.facebook.com/holdan.mcmullen" target="_blank" title="Facebook">
                    Facebook
                </a>
            </div>
            <div className='copy'>
                Holdan McMullen &copy; 2022
            </div>
        </footer>
    )
};

export default Footer;
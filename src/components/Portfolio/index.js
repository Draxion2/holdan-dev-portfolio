import React, { useState } from 'react';
import applications from '../../utils/applications';

function Portfoilo() {

    const [apps] = useState(applications);

    return (
        <section id="portfolio" className="applications">
            <h2 className="section-title">Portfolio</h2>
            <div className="apps-display">
                {apps.map((app) => (
                    <div className="card" key={app.title} title={app.title}>
                        <div className="card-title">
                            <h4>{app.title}</h4>
                            <p>{app.text}</p>
                        </div>
                        <a href={app.deployLink} target="_blank">
                            <img
                            src={require(`../../assets/images/${app.image}`)}
                            alt={app.alt}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )

};

export default Portfoilo;
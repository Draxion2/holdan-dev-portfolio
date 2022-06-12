import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        location,
        setLocation
    } = props

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory])
    return (
        <div>
            <header>
                <div className="toolbar">
                    <h1>Holdan <span className="logo">J</span> McMullen</h1>
                    <nav>
                    <ul className="navlinks">
                        {categories.map((category) => (
                            <li
                            className={`cat ${currentCategory.name === category.name && !location && `navActive`}`}
                            key={category.name}
                            onClick={() => {
                                setCurrentCategory(category);
                                setLocation(false);
                            }}
                            title={category.desc}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                    </nav>
                </div>
            </header>
            <section id="top" className="main">
                <h2 id="main-title">A Full Stack Web Developer</h2>
            </section>
        </div>
    )
}

export default Nav;
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Portfoilo from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: "Home", desc: "Return Home"},
    { name: "About Me", desc: "About Holdan McMullen"},
    { name: "Portfolio", desc: "View all my works!"},
    { name: "Contact Me", desc: "Send me a message"}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [location, setLocation] = useState("false");


  return (
    <div>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      location={location}
      setLocation={setLocation}
    />
      <div>
        {
          (currentCategory.name === "Home" ||
          currentCategory.name === "About") ?
            <About />
          /*}: (currentCategory.name === "Portfolio") ?
            <Portfoilo />
          : (currentCategory.name === "Contact Me") ?
        <Contact />*/
          :
          <About />
        }
      </div>
    </div>
  );
}

export default App;

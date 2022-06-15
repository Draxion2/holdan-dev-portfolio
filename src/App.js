import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfoilo from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: "About Me", desc: "About Holdan McMullen"},
    { name: "Portfolio", desc: "View all my works!"},
    { name: "Contact Me", desc: "Send me a message"},
    { name: "Resume", desc: "View Resume"}
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
          (currentCategory.name === "About") ?
            <About />
          : (currentCategory.name === "Portfolio") ?
            <Portfoilo />
          : (currentCategory.name === "Contact Me") ?
            <Contact />
          : (currentCategory.name === "Resume") ?
          <Resume />
        :
          <About />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;

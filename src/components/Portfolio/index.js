import React, { useState } from 'react';

function Portfoilo() {

    const [applications] = useState([
        {
            title: "Run Buddy",
            text: "HTML / CSS",
            image: "../../assets/images/app01_run_buddy.png",
            alt: "the run buddy website",
            deployLink: "https://lernantino.github.io/run-buddy/",
            githubLink: "https://github.com/Draxion2/run-buddy"
        },
        {
            title: "Refactoring Horiseon",
            text: "Optimizing HTML / CSS",
            image: "../../assets/images/app02_refactoring.jpg",
            alt: "the horiseon webpage",
            deployLink: "https://draxion2.github.io/refactoring-horiseon/",
            githubLink: "https://github.com/Draxion2/refactoring-horiseon/"
        },
        {
            title: "Robot Gladiators",
            text: "JavaScript",
            image: "../../assets/images/app03_robot.jpg",
            alt: "a.i. robot thinking",
            deployLink: "https://draxion2.github.io/robot-gladiators/",
            githubLink: "https://github.com/Draxion2/robot-gladiators/"
        },
        {
            title: "Give Me a Password",
            text: "JavaScript",
            image: "../../assets/images/app04_pwGen.png",
            alt: "password",
            deployLink: "https://draxion2.github.io/give-me-a-password/",
            githubLink: "https://github.com/Draxion2/give-me-a-password/"
        },
        {
            title: "Taskinator",
            text: "HTML / CSS/ JavaScript",
            image: "../../assets/images/app06_taskinator.jpg",
            alt: "the taskinator javascript project",
            deployLink: "https://draxion2.github.io/taskinator/",
            githubLink: "https://github.com/Draxion2/taskinator/"
        },
        {
            title: "JavaScript Speed Test",
            text: "HTML / CSS/ JavaScript",
            image: "../../assets/images/app07_jsSpeedTest.png",
            alt: "preview of the javascript quiz",
            deployLink: "https://draxion2.github.io/javascript-speed-test/",
            githubLink: "https://github.com/Draxion2/javascript-speed-test/"
        },
        {
            title: "Work Hourly Agenda",
            text: "Third-party API",
            image: "../../assets/images/app08_workHourly.png",
            alt: "the application work-hourly-agenda",
            deployLink: "https://draxion2.github.io/work-hourly-agenda/",
            githubLink: "https://github.com/Draxion2/work-hourly-agenda/"
        },
        {
            title: "Git It Done",
            text: "JavaScript / Server-side API",
            image: "../../assets/images/app09_gitItDone.png",
            alt: "preview of the git-it-done app",
            deployLink: "https://draxion2.github.io/git-it-done/",
            githubLink: "https://github.com/Draxion2/git-it-done/"
        },
        {
            title: "Show Me the Weather",
            text: "Server-side API",
            image: "../../assets/images/app10_weatherApp.png",
            alt: "the application show me the weather",
            deployLink: "https://draxion2.github.io/show-me-the-weather/",
            githubLink: "https://github.com/Draxion2/show-me-the-weather/"
        },
        {
            title: "Show Pro",
            text: "Collaborated Front-end Project",
            image: "../../assets/images/app11_showPro.jpg",
            alt: "the application of show pro collaboration project",
            deployLink: "https://BlinkingHeimdall.github.io/show-pro/",
            githubLink: "https://github.com/BlinkingHeimdall/show-pro/"
        },
        {
            title: "Polished README Generator",
            text: "Node.js",
            image: "../../assets/images/app12_readmeGen.png",
            alt: "the node application polished-readme-generator",
            deployLink: "https://github.com/Draxion2/polished-readme-generator/blob/main/README.md#polished-readme-generator",
            githubLink: "https://github.com/Draxion2/polished-readme-generator/blob/main/README.md#polished-readme-generator"
        },
        {
            title: "Team Online Generator",
            text: "OOP (Object-Oriented Programming)",
            image: "../../assets/images/app13_teamGen.png",
            alt: "the OOP app team-outline-generator",
            deployLink: "https://github.com/Draxion2/team-outline-generator/blob/main/README.md#team-outline-generator",
            githubLink: "https://github.com/Draxion2/team-outline-generator/blob/main/README.md#team-outline-generator"
        },
        {
            title: "Note Keeper",
            text: "Back-end with Express.js",
            image: "../../assets/images/app14_noteKeeper.png",
            alt: "the express app note keeper",
            deployLink: "https://draxionnotekeeper.herokuapp.com/",
            githubLink: "https://github.com/Draxion2/note-keeper"
        },
        {
            title: "Employee Tracker",
            text: "SQL Database",
            image: "../../assets/images/app15_employeeTracker.png",
            alt: "the sql database app employee tracker",
            deployLink: "https://github.com/Draxion2/employee-tracker/blob/main/README.md#employee-tracker",
            githubLink: "https://github.com/Draxion2/employee-tracker/blob/main/README.md#employee-tracker"
        },
        {
            title: "E-commerce Backend",
            text: "Backend Development",
            image: "../../assets/images/app16_eCommerceBackend.png",
            alt: "the backend project E-commerce",
            deployLink: "https://github.com/Draxion2/employee-tracker/blob/main/README.md#e-commerce-backend",
            githubLink: "https://github.com/Draxion2/employee-tracker/blob/main/README.md#e-commerce-backend"
        },
        {
            title: "Budgetek",
            text: "Collaborated Full-stack Project",
            image: "../../assets/images/app17_budgetek.jpg",
            alt: "the application of budgetek collaboration project",
            deployLink: "https://quiet-tundra-30236.herokuapp.com/",
            githubLink: "https://github.com/dsamuelson/Budgetek"
        },
        {
            title: "Pizza Hunt",
            text: "MongoDB / Mongoose.js",
            image: "../../assets/images/app18_pizzaHunt.jpg",
            alt: "the application of pizza hunt",
            deployLink: "https://gentle-spire-58891.herokuapp.com/",
            githubLink: "https://github.com/Draxion2/pizza-hunt"
        },
        {
            title: "Hello Thoughts",
            text: "NoSQL Network API",
            image: "../../assets/images/app19_helloThoughts.jpg",
            alt: "the application of hello thoughts",
            deployLink: "https://github.com/Draxion2/hello-thoughts/blob/main/README.md#hello-thoughts",
            githubLink: "https://github.com/Draxion2/hello-thoughts/blob/main/README.md#hello-thoughts"
        },
        {
            title: "Budget Writer",
            text: "PWA (Progressive Web Application)",
            image: "../../assets/images/app20_budgetWriter.png",
            alt: "the application of budget writer",
            deployLink: "https://secret-springs-18295.herokuapp.com/",
            githubLink: "https://github.com/Draxion2/budget-writer"
        }
    ]);

};

export default Portfoilo;
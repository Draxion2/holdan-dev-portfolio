function loadApplications() {

    const gitHub = "https://github.com/Draxion2";

    const applications = [
        {
            title: "Run Buddy",
            text: "HTML / CSS",
            image: "app01_run_buddy.png",
            alt: "the run buddy website",
            deployLink: "https://lernantino.github.io/run-buddy/",
            githubLink: gitHub + "/run-buddy"
        },
        {
            title: "Refactoring Horiseon",
            text: "Optimizing HTML / CSS",
            image: "app02_refactoring.jpg",
            alt: "the horiseon webpage",
            deployLink: "https://draxion2.github.io/refactoring-horiseon/",
            githubLink: gitHub + "/refactoring-horiseon/"
        },
        {
            title: "Robot Gladiators",
            text: "JavaScript",
            image: "app03_robot.jpg",
            alt: "a.i. robot thinking",
            deployLink: "https://draxion2.github.io/robot-gladiators/",
            githubLink: gitHub + "/robot-gladiators/"
        },
        {
            title: "Give Me a Password",
            text: "JavaScript",
            image: "app04_pwGen.png",
            alt: "password",
            deployLink: "https://draxion2.github.io/give-me-a-password/",
            githubLink: gitHub + "/give-me-a-password/"
        },
        {
            title: "Taskinator",
            text: "HTML / CSS/ JavaScript",
            image: "app04_pwGen.png",
            alt: "the taskinator javascript project",
            deployLink: "https://draxion2.github.io/taskinator/",
            githubLink: gitHub + "/taskinator/"
        },
        {
            title: "JavaScript Speed Test",
            text: "HTML / CSS/ JavaScript",
            image: "app07_jsSpeedTest.png",
            alt: "preview of the javascript quiz",
            deployLink: "https://draxion2.github.io/javascript-speed-test/",
            githubLink: gitHub + "/javascript-speed-test/"
        },
        {
            title: "Work Hourly Agenda",
            text: "Third-party API",
            image: "app08_workHourly.png",
            alt: "the application work-hourly-agenda",
            deployLink: "https://draxion2.github.io/work-hourly-agenda/",
            githubLink: gitHub + "/work-hourly-agenda/"
        },
        {
            title: "Git It Done",
            text: "JavaScript / Server-side API",
            image: "app09_gitItDone.png",
            alt: "preview of the git-it-done app",
            deployLink: "https://draxion2.github.io/git-it-done/",
            githubLink: gitHub + "/git-it-done/"
        },
        {
            title: "Show Me the Weather",
            text: "Server-side API",
            image: "app10_weatherApp.png",
            alt: "the application show me the weather",
            deployLink: "https://draxion2.github.io/show-me-the-weather/",
            githubLink: gitHub + "/show-me-the-weather/"
        },
        {
            title: "Show Pro",
            text: "Collaborated Front-end Project",
            image: "app11_showPro.jpg",
            alt: "the application of show pro collaboration project",
            deployLink: "https://BlinkingHeimdall.github.io/show-pro/",
            githubLink: "https://github.com/BlinkingHeimdall/show-pro/"
        },
        {
            title: "Polished README Generator",
            text: "Node.js",
            image: "app12_readmeGen.png",
            alt: "the node application polished-readme-generator",
            deployLink: gitHub + "/polished-readme-generator/blob/main/README.md#polished-readme-generator",
            githubLink: gitHub + "/polished-readme-generator/blob/main/README.md#polished-readme-generator"
        },
        {
            title: "Team Online Generator",
            text: "OOP (Object-Oriented Programming)",
            image: "app13_teamGen.png",
            alt: "the OOP app team-outline-generator",
            deployLink: gitHub + "/team-outline-generator/blob/main/README.md#team-outline-generator",
            githubLink: gitHub + "/team-outline-generator/blob/main/README.md#team-outline-generator"
        },
        {
            title: "Note Keeper",
            text: "Back-end with Express.js",
            image: "app14_noteKeeper.png",
            alt: "the express app note keeper",
            deployLink: "https://draxionnotekeeper.herokuapp.com/",
            githubLink: gitHub + "/note-keeper"
        },
        {
            title: "Employee Tracker",
            text: "SQL Database",
            image: "app15_employeeTracker.png",
            alt: "the sql database app employee tracker",
            deployLink: gitHub + "/employee-tracker/blob/main/README.md#employee-tracker",
            githubLink: gitHub + "/employee-tracker/blob/main/README.md#employee-tracker"
        },
        {
            title: "E-commerce Backend",
            text: "Backend Development",
            image: "app16_eCommerceBackend.png",
            alt: "the backend project E-commerce",
            deployLink: gitHub + "/employee-tracker/blob/main/README.md#e-commerce-backend",
            githubLink: gitHub + "/employee-tracker/blob/main/README.md#e-commerce-backend"
        },
        {
            title: "Budgetek",
            text: "Collaborated Full-stack Project",
            image: "app17_budgetek.jpg",
            alt: "the application of budgetek collaboration project",
            deployLink: "https://quiet-tundra-30236.herokuapp.com/",
            githubLink: "https://github.com/dsamuelson/Budgetek"
        },
        {
            title: "Pizza Hunt",
            text: "MongoDB / Mongoose.js",
            image: "app18_pizzaHunt.jpg",
            alt: "the application of pizza hunt",
            deployLink: "https://gentle-spire-58891.herokuapp.com/",
            githubLink: gitHub + "/pizza-hunt"
        },
        {
            title: "Hello Thoughts",
            text: "NoSQL Network API",
            image: "app19_helloThoughts.jpg",
            alt: "the application of hello thoughts",
            deployLink: gitHub + "/hello-thoughts/blob/main/README.md#hello-thoughts",
            githubLink: gitHub + "/hello-thoughts/blob/main/README.md#hello-thoughts"
        },
        {
            title: "Budget Writer",
            text: "PWA (Progressive Web Application)",
            image: "app20_budgetWriter.png",
            alt: "the application of budget writer",
            deployLink: "https://secret-springs-18295.herokuapp.com/",
            githubLink: gitHub + "/budget-writer"
        }
    ];

    return applications;

}

module.exports = loadApplications;
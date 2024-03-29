export interface Project {
  id: number;
  description: string;
  name: string;
  module: string;
  link: string
  src: string
}

const projects: Project[] = [
  {
    id: 1,
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in HTML5 and positioning in CSS3 that we had achieved so far.",
    module: "Fundaments",
    name: "Project lessons learned",
    link: "https://deboraserra.github.io/Project-lessons-learned/project-block3.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/lessonsLearned.png?raw=true",
  },
  {
    id: 2,
    module: "Fundaments",
    name: "Project Playground Functions",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in JavaScript using conditions (if/else, switch/case), loops (for, for/in, for/of) and common operators.",
    link: "https://github.com/DeboraSerra/Trybe-exercises/tree/main/Module1_Fundaments/Block4/Project-playground-functions",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/playground.jpeg?raw=true",
  },
  {
    id: 3,
    name: "Project Pixel Art",
    module: "Fundaments",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a painting board were the user can select a a color and then click the 'pixel' board to color it. The user can also resize the board from 5 to 50 'pixels'.",
    link: "https://deboraserra.github.io/Project-pixel-art/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/pixelArt.png?raw=true",
  },
  {
    id: 4,
    module: "Fundaments",
    name: "Project To Do List",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a to do list were the user can add as many tasks as they like, can mark it as complete, change it's position, delete tasks and save to access the tasks later.",
    link: "https://deboraserra.github.io/Project-to-do-list/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/ToDoList.png?raw=true",
  },
  {
    id: 5,
    module: "Fundaments",
    name: "Project Mystery Letter",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a sort of game where the user can type a phrase e see it turned into a message 'clipped' from magazines and newspapers.",
    link: "https://deboraserra.github.io/Project-mystery-letter/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/MysteryLetter.png?raw=true",
  },
  {
    id: 6,
    module: "Fundaments",
    name: "Project Meme Generator",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. In this project the user can select a famous image or upload one and type a message to appear as a meme. They can also select three different type of border to decorate it.",
    link: "https://deboraserra.github.io/Project-meme-generator/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/MemeGenerator.png?raw=true",
  },
  {
    id: 7,
    module: "Fundaments",
    name: "Project Color Guess",
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. This project is a game where the user receive three different numbers between 0 and 255 and 6 colors. Then they have to guess which of the colors match the given numbers based in the rgb colors. For each right answer the user receives 3 points.",
    link: "https://deboraserra.github.io/Project-color-guess/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/ColorGuess.png?raw=true",
  },
  {
    id: 8,
    description:
      "It was developed in groups of 2 people as a project to the Software Development course in Trybe and was meant to apply the knowledge we got so far regarding forms and the properties of Flex box in CSS. It simulates a registration form to the school of Trybewarts.",
    module: "Fundaments",
    name: "Project Trybewarts",
    link: "https://deboraserra.github.io/Project-Trybewarts/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/TrybeWarts.png?raw=true",
  },
  {
    id: 9,
    description:
      "It was developed as a challenge from one of Trybe's instructors. It is a dynamic clock with responsive design.",
    module: "Personal project",
    name: "Clock",
    link: "https://deboraserra.github.io/Clock/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/Clock.png?raw=true",
  },
  {
    id: 10,
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in Higher Order Functions, Destructuring, Spread Operator and others improvements of ES6. It simulates the systems in a zoo. The next step in this project is apply the functions developed in an 'Online Zoo' so the user can interact with the functions developed.",
    module: "Fundaments",
    name: "Project Zoo Functions",
    link: "https://github.com/DeboraSerra/DeboraSerra.github.io/tree/main/Project-zoo-functions",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/zoofunctions.jpeg?raw=true",
  },
  {
    id: 11,
    description:
      "It was developed as project to the Software Development course in Trybe. This project was meant to apply the use of asynchronous functions a usage of APIs. It simulates a shopping app, where the user can browse through the technology items an save them to the shopping cart or delete it from the cart. The final price is calculated automatically.",
    module: "Fundaments",
    name: "Project Shopping Cart",
    link: "https://deboraserra.github.io/Project-shopping-cart/index.html",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/ShoppingCart.png?raw=true",
  },
  {
    id: 12,
    description:
      "It was developed as project to the Software Development course in Trybe. As the first project using React, it was meant to apply the technics to render lists on screen. It shows a list of planets and a list of space missions. The user can click on each planet and to see the missions to it.",
    module: "Front-end",
    name: "Project Solar System",
    link: "https://deboraserra.github.io/project-solar-system/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/SolarSystem.png?raw=true",
  },
  {
    id: 13,
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to use the state of the components and controlled components. The project is a card game where the user can create a deck of cards, where one of them is a special card.\n After that the user can see the cards they created and then, if more than one person create a deck, they can play. When the user clicks the start button, the deck is shuffled and the game can start. The special (trunfo) card wins from any card, for the others, the players select one off the three attributes and compare with each other, the biggest attribute wins.",
    module: "Front-end",
    name: "Project Tryunfo",
    link: "https://deboraserra.github.io/project-tryunfo/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/Tryunfo.png?raw=true",
  },
  {
    id: 14,
    description:
      "It was a developed as a challenge from one of Trybe's specialists. Since in class we needed timers to mark the interval, we were challenged to develop a timer with the following requirements: It must be developed in React, the timer must work properly, It must have something to signal that the time is over.",
    module: "Personal project",
    name: "Project Stopwatch",
    link: "https://deboraserra.github.io/stopwatch/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/Stopwatch.png?raw=true",
  },
  {
    id: 15,
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to practice the use of routes. To use this application, the user must type a name to be redirected to a search page. Then the user can type the name of an artist and will receive a list that match what was typed. After that the user can select an album to be redirected to the previous of the musics. They can also mark the musics as favorites and revisit it in the favorites section. At last, the user can edit the profile page to add a photo, change the name, add an email and some description if they want.",
    module: "Front-end",
    name: "Project TrybeTunes",
    link: "https://deboraserra.github.io/project-trybe-tunes/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/Trybetunes.png?raw=true",
  },
  {
    id: 16,
    description:
      "It was developed in a group of five people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. The project simulates an online store where the user can search for a specific product or select a category. After that, the user can directly add a product to the cart or can click o in to see be redirected to the page of details of the product. In that page the user can see the technical specifications of the products and the evaluations and can also add an evaluation. Through this page, the user can add more than one product at a time to the shopping cart. When they are ready to 'check out', they can click on the cart icon and be redirected to the cart page. In this page, the user can make alterations in the products, delete, reduce or increase the amount of items in each product, empty the cart or finalize the sale, being redirect do the checkout page. In the checkout page the user can see the products they have selected an fill the buyer's information to 'finalize' the sale.",
    module: "Front-end",
    name: "Project Front-end Online Store",
    link: "https://deboraserra.github.io/project-online-store/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/OnlineStore.png?raw=true",
  },
  {
    id: 17,
    description:
      "It was developed as project to the Software Development course in Trybe. It was meant to practice the use of Redux and Thunk to manage the global state of the application. This project simulates an expenses control. To start the user have to type an email and a password to 'log in' and be redirected to the wallet page. Then the user can type the value they spent, with what it was spend on, the currency, the method of payment and the category. After that, the information goes to a table where the value spent is converted to real and is added to the total amount registered on the top right of the page. The user can also edit the expenses or delete it.",
    module: "Front-end",
    name: "Project Trybewallet",
    link: "https://deboraserra.github.io/project-trybewallet/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/trybewallet.png?raw=true",
  },
  {
    id: 18,
    description:
      "It was developed in a group of six people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. This project is a trivia game where the user can select the difficulty, category and type of the questions by clicking the gear button. After that, they must type a name and an email to start the game. When the game starts, the user has 30 seconds to to answer the question. If they answer in time, the correct answer appears in green and the wrong ones appear in red and the next button becomes visible. If the user doesn't answer in time, the answer buttons are disabled and a button to start again appears on screen. The game has 5 questions and at the end the user receives a score and number of hits. After that, the user can choose to play again or see the ranking of the players.",
    module: "Front-end",
    name: "Project Trivia Game",
    link: "https://deboraserra.github.io/project-trivia-game/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/trivi-game.png?raw=true",
  },
  {
    id: 19,
    description:
      "It was developed as a project to the Software Development course in Trybe. It was meant to practice the use o function components and Context-API. This project uses an API that shows the information about the Star Wars planets and the user can filter the information by the planet' name, or any numeric value specified in a select field. The user can also sort the data according to this columns.",
    module: "Front-end",
    name: "Project Star Wars Planets",
    link: "https://deboraserra.github.io/project-starwars-planets/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/Starwars.png?raw=true",
  },
  {
    id: 20,
    description:
      "It was developed as a challenge from one of Trybe's specialists. The goal was to create a password generator with mobile first design where the user can select the length of the password and if it must include uppercase letters, lowercase letters, numbers and/or symbols.",
    module: "Personal project",
    name: "Password Generator",
    link: "https://deboraserra.github.io/password-generator/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/PasswordGenerator.png?raw=true",
  },
  {
    id: 21,
    description:
      "It was developed in a group of four people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far as the final project to the Front End Module and to apply the agile methodologies. This project uses two recipes APIs, one for meals and one for drinks. In this application the user can 'log in' with email and password and be redirected to the meals page, where they can see 12 cards of different recipes. The user can select a specific category or search for a specific ingredient or meal name and select meal card to be redirected to the recipe. In the recipe page, the user can like it or click the share button to copy the url of the recipe, choose a recommended drink or start the recipe. When the user starts the recipe, they are redirected to a similar page, where they can check the ingredients as they proceed. If for some reason the user has to stop in the middle, the progress is saved, otherwise the finish button is enabled and the user is redirected to the done recipes page. The user can also click the profile button and then choose to see the done recipes page or the the favorite recipes page. The drinks paths are the same, the user just have to click the dink icon on the bottom left of the screen. If the user click the compass icon, they will be redirected to the explore page, where they can choose to explore drinks or foods, and then choose to explore by ingredient, by nationality (foods) or to receive a surprise recipe. This application was developed with more than 90% test coverage.",
    module: "Front-end",
    name: "Project Recipes App",
    link: "https://deboraserra.github.io/project-recipes-app/",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/RecipesApp.png?raw=true",
  },
  {
    id: 22,
    description:
      "It was developed as a project to the Software Development course in Trybe. It was meant for us to practice dockerizing an application, creating a Dockerfile and a docker-compose.yml",
    module: "Back-end",
    name: "Project Docker To-do List",
    link: "https://github.com/DeboraSerra/project-docker-todo-list",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/docker-to-do.png?raw=true",
  },
  {
    id: 23,
    description:
      "It was developed as a project to the Software Development course in Trybe. It was meant to practice our knowledge of making queries in a sql database.",
    module: "Back-end",
    name: "Project All for One",
    link: "https://github.com/DeboraSerra/project-mysql-all-for-one",
    src: "https://devtools.com.br/blog/wp-content/uploads/2013/06/MySQL-Logo.wine_.png",
  },
  {
    id: 24,
    description:
      "It was developed as a project to the Software Development course in Trybe. It was meant for us to practice manipulating tables and schemas in a sql database.",
    module: "Back-end",
    name: "Project One For All",
    link: "https://github.com/DeboraSerra/project-mysql-one-for-all",
    src: "https://devtools.com.br/blog/wp-content/uploads/2013/06/MySQL-Logo.wine_.png",
  },
  {
    id: 25,
    description:
      "It was developed as a project to the Software Development course in Trybe. It was meant to practice creating an API using a json file as database.",
    module: "Back-end",
    name: "Project Talker Manager",
    link: "https://github.com/DeboraSerra/Project-talker-manager",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/talkerManager.png?raw=true",
  },
  {
    id: 26,
    description:
      "It was developed as a challenge from one of Trybe's instructors. For this project we were given a 'database' of people and were asked to develop an API to create, read, update and delete (CRUD) the data in this 'database'. After creating the API, we were asked to create a front end to use this API. Next, we were oriented to develop the unit tests to the backend and frontend. And, at last, to dockerize the application. In this application, the person must first 'login' with a valid email and a password that has at least one letter, one number and one symbol. If the person isn't registered, they can click on the button to register and then login. After that the user is free to see the people, delete, update or add new people to the database.",
    module: "Personal project",
    name: "Project Escritório do seu Zé",
    link: "https://github.com/DeboraSerra/Escritorio-do-seu-ze",
    src: "https://github.com/DeboraSerra/portfolio/blob/master/frontend/src/images/excritorioSeuZe.png?raw=true",
  },
  {
    id: 27,
    description:
      "In this project we developed an API to train how to make a CRUD using the Sequelize ORM simulating the back end to be used in a blog. With this API is possible to create users and associate blog posts to the users created and classify them using categories.",
    module: "Back-end",
    name: "Project Blogs's API",
    link: "https://github.com/DeboraSerra/project-blogs-api",
    src: "/images/back-end/blog.webp",
  },
  {
    id: 28,
    description:
      "This project was developed using Typescript and simulates a registry of a 'blacksmith'. In this API we can add users and products, and associate as orders. As a personal project and to keep applying the front end knowledge, I am currently developing User Interface to use the API.",
    module: "Back-end",
    name: "Project Trybesmith",
    link: "https://github.com/DeboraSerra/project-trybesmith",
    src: "/images/back-end/trybesmith.webp",
  },
  {
    id: 29,
    description:
      "This project was developed using Typescript and OOP to simulate a RPG game, as in Dungeons and Dragons. With the classes created in the project, we can create different kinds of people, such as humans, elves, dwarfs and more, and Dragons and make them fight with each other.",
    module: "Back-end",
    name: "Project Trybers and Dragons",
    link: "https://github.com/DeboraSerra/project-trybers-and-dragons",
    src: "/images/back-end/trybers-and-dragons.webp",
  },
  {
    id: 30,
    description:
      "In this project we followed the directions to practice using MQL (Mongo Query Language).",
    module: "Back-end",
    name: "Project Commerce",
    link: "https://github.com/DeboraSerra/project-commerce",
    src: "/images/back-end/commerce.webp",
  },
  {
    id: 31,
    description:
      "This project was developed using Typescript, MongoDB and OOP. It simulates a car shop where the user can search, create, update and delete information about cars and motorcycles.",
    module: "Back-end",
    name: "Project Car Shop",
    link: "https://github.com/DeboraSerra/project-car-shop",
    src: "/images/back-end/car-shop.webp",
  },
  {
    id: 32,
    description:
      "This project wasn't mandatory for people who were already working and marked the end of the Back-end module, so I paired with a friend to make it. It simulates a delivery application, were it is possible to log in as a user, as a seller or as an admin. It you log in as a user, you can see the products and make orders. If you are logged in as a seller, you can do everything a user can update a sale to mark the progress. And if you are logged in as an admin, you can do everything the user and seller can do and also add and delete sales and products.",
    module: "Back-end/Personal Project",
    name: "Project Delivery App",
    link: "https://github.com/DeboraSerra/project-delivery-app",
    src: "/images/back-end/delivery-app.webp",
  },
  {
    id: 33,
    description:
      "This was the first project using Python. We had to create some tests and read the information from a csv file and return it in a list of Dict and be able to filter the information extracted from the file. After that, we had a bonus requirement to make the Flask application render the specific information of a job when it is clicked.",
    module: "Computer Science",
    name: "Project Job Insights",
    link: "https://github.com/DeboraSerra/project-job-insights",
    src: "/images/cs/job-insights.webp",
  },
  {
    id: 34,
    description:
      "In this project we had to develop some functions to generate simple and full reports of a fictional inventory. The entry must be a list of products, that can come from an CSV, JSON or XML file, and the simple report returns the closest expire date, the longest production date and the name of the company with more products. The full report returns all the information from the simple one and the amount of products by company.",
    module: "Computer Science",
    name: "Project Inventory Report",
    link: "https://github.com/DeboraSerra/project-inventory-report",
    src: "/images/cs/inventory-report.webp",
  },
  {
    id: 35,
    description:
      "In this project we had to create functions to scrape data from the Trybe blog. The information extracted were stored in a mongoDB database. We also created functions to find posts using the title, date, tag and category. It is also possible to get the top 5 posts in general and by category.",
    module: "Computer Science",
    name: "Project Tech News",
    link: "https://github.com/DeboraSerra/project-tech-news",
    src: "/images/cs/tech-news.webp",
  },
  {
    id: 36,
    description:
      "In this project we were oriented to develop different types of algorithms, as in search, order and others, focusing on specific complexity levels, as well as some tests.",
    module: "Computer Science",
    name: "Project Algorithms",
    link: "https://github.com/DeboraSerra/project-algorithms",
    src: "/images/cs/algorithms.webp",
  },
  {
    id: 37,
    description:
      "The project TING (Trybe Is Not Google) was created to practice the use of data structures like Arrays, Lists, Lines and Piles. We had to implement a program that simulates the document indexing similar to the one used by Google, which means, a program that allow to add files and do searches in this files.",
    module: "Computer Science",
    name: "Project Algorithms",
    link: "https://github.com/DeboraSerra/project-ting",
    src: "/images/cs/ting.webp",
  },
  {
    id: 38,
    description:
      "This project simulates a diner that already has a sale system that saves the name of the person, the order and the day of the week that the order was made. Using this information we had to filter the data to get some publicity information to be used later and track the orders, as most ordered and never ordered, by client, and the days, as the busiest and the slowest. As a bonus, we had to implement an inventory control based on the minimum amount of ingredients allowed and the orders made.",
    module: "Computer Science",
    name: "Project Restaurant Orders",
    link: "https://github.com/DeboraSerra/project-restaurant-orders",
    src: "/images/cs/restaurant-orders.webp",
  },
];

export default projects;

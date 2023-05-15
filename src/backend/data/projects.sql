CREATE DATABASE  IF NOT EXISTS `projects` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `projects`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: projects
-- ------------------------------------------------------
-- Server version	5.7.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `back_end`
--

DROP TABLE IF EXISTS `back_end`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `back_end` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `back_end`
--

LOCK TABLES `back_end` WRITE;
/*!40000 ALTER TABLE `back_end` DISABLE KEYS */;
INSERT INTO `back_end` VALUES (1,'Project Docker To-do List','It was developed as a project to the Software Development course in Trybe. It was meant for us to practice dockerizing an application, creating a Dockerfile and a docker-compose.yml','https://github.com/DeboraSerra/project-docker-todo-list','blob:https://deboraserra.github.io/682fc189-69d8-4141-9d4f-d048d9e2efe5'),(2,'Project One For All','It was developed as a project to the Software Development course in Trybe. It was meant for us to practice manipulating tables and schemas in a sql database.','https://github.com/DeboraSerra/project-mysql-one-for-all','https://devtools.com.br/blog/wp-content/uploads/2013/06/MySQL-Logo.wine_.png'),(3,'Project All for One','It was developed as a project to the Software Development course in Trybe. It was meant to practice our knowledge of making queries in a sql database.','https://github.com/DeboraSerra/project-mysql-all-for-one','https://devtools.com.br/blog/wp-content/uploads/2013/06/MySQL-Logo.wine_.png'),(4,'Project Talker Manager','It was developed as a project to the Software Development course in Trybe. It was meant to practice creating an API using a json file as database.','https://github.com/DeboraSerra/Project-talker-manager','blob:https://deboraserra.github.io/4e3a5096-5024-48d9-9690-6d646323f083');
/*!40000 ALTER TABLE `back_end` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `front_end`
--

DROP TABLE IF EXISTS `front_end`;
CREATE TABLE `front_end` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `front_end`
--

LOCK TABLES `front_end` WRITE;
/*!40000 ALTER TABLE `front_end` DISABLE KEYS */;
INSERT INTO `front_end` VALUES (1,'Project Tryunfo','It was developed as project to the Software Development course in Trybe. It was meant to use the state of the components and controlled components. The project is a card game where the user can create a deck of cards, where one of them is a special card.\n After that the user can see the cards they created and then, if more than one person create a deck, they can play. When the user clicks the start button, the deck is shuffled and the game can start. The special (trunfo) card wins from any card, for the others, the players select one off the three attributes and compare with each other, the biggest attribute wins.','https://deboraserra.github.io/project-tryunfo/','blob:https://deboraserra.github.io/9e9a75f0-77f9-49b3-b4dd-b44c2525d189'),(2,'Project Front-end Online Store','It was developed in a group of five people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. The project simulates an online store where the user can search for a specific product or select a category. After that, the user can directly add a product to the cart or can click o in to see be redirected to the page of details of the product. In that page the user can see the technical specifications of the products and the evaluations and can also add an evaluation. Through this page, the user can add more than one product at a time to the shopping cart. When they are ready to \'check out\', they can click on the cart icon and be redirected to the cart page. In this page, the user can make alterations in the products, delete, reduce or increase the amount of items in each product, empty the cart or finalize the sale, being redirect do the checkout page. In the checkout page the user can see the products they have selected an fill the buyer\'s information to \'finalize\' the sale.','https://deboraserra.github.io/project-online-store/','blob:https://deboraserra.github.io/941e6173-a146-48b3-b686-78a944391591'),(3,'Project TrybeTunes','It was developed as project to the Software Development course in Trybe. It was meant to practice the use of routes. To use this application, the user must type a name to be redirected to a search page. Then the user can type the name of an artist and will receive a list that match what was typed. After that the user can select an album to be redirected to the previous of the musics. They can also mark the musics as favorites and revisit it in the favorites section. At last, the user can edit the profile page to add a photo, change the name, add an email and some description if they want.','https://deboraserra.github.io/project-trybe-tunes/','blob:https://deboraserra.github.io/d904c400-c20d-46c8-887d-56b6912b3ac6'),(4,'Project Recipes App','It was developed in a group of four people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far as the final project to the Front End Module and to apply the agile methodologies. This project uses two recipes APIs, one for meals and one for drinks. In this application the user can \'log in\' with email and password and be redirected to the meals page, where they can see 12 cards of different recipes. The user can select a specific category or search for a specific ingredient or meal name and select meal card to be redirected to the recipe. In the recipe page, the user can like it or click the share button to copy the url of the recipe, choose a recommended drink or start the recipe. When the user starts the recipe, they are redirected to a similar page, where they can check the ingredients as they proceed. If for some reason the user has to stop in the middle, the progress is saved, otherwise the finish button is enabled and the user is redirected to the done recipes page. The user can also click the profile button and then choose to see the done recipes page or the the favorite recipes page. The drinks paths are the same, the user just have to click the dink icon on the bottom left of the screen. If the user click the compass icon, they will be redirected to the explore page, where they can choose to explore drinks or foods, and then choose to explore by ingredient, by nationality (foods) or to receive a surprise recipe. This application was developed with more than 90% test coverage.','https://deboraserra.github.io/project-recipes-app/','blob:https://deboraserra.github.io/f9caf8db-0c2b-4790-9592-9ba7d5d57a07'),(5,'Project Solar System','It was developed as project to the Software Development course in Trybe. As the first project using React, it was meant to apply the technics to render lists on screen. It shows a list of planets and a list of space missions. The user can click on each planet and to see the missions to it.','https://deboraserra.github.io/project-solar-system/','blob:https://deboraserra.github.io/0b1a1976-557f-4f93-a471-7a230e67df25'),(6,'Project Star Wars Planets','It was developed as a project to the Software Development course in Trybe. It was meant to practice the use o function components and Context-API. This project uses an API that shows the information about the Star Wars planets and the user can filter the information by the planet\' name, or any numeric value specified in a select field. The user can also sort the data according to this columns.','https://deboraserra.github.io/project-starwars-planets/','blob:https://deboraserra.github.io/a2fe70a8-e0c1-47ae-a9c8-1c57fc8fa0bd'),(7,'Project Trybewallet','It was developed as project to the Software Development course in Trybe. It was meant to practice the use of Redux and Thunk to manage the global state of the application. This project simulates an expenses control. To start the user have to type an email and a password to \'log in\' and be redirected to the wallet page. Then the user can type the value they spent, with what it was spend on, the currency, the method of payment and the category. After that, the information goes to a table where the value spent is converted to real and is added to the total amount registered on the top right of the page. The user can also edit the expenses or delete it.','https://deboraserra.github.io/project-trybewallet/','blob:https://deboraserra.github.io/cc532d6e-ede1-4cf7-af26-7b5de00a3e3b'),(8,'Project Trivia Game','It was developed in a group of six people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. This project is a trivia game where the user can select the difficulty, category and type of the questions by clicking the gear button. After that, they must type a name and an email to start the game. When the game starts, the user has 30 seconds to to answer the question. If they answer in time, the correct answer appears in green and the wrong ones appear in red and the next button becomes visible. If the user doesn\'t answer in time, the answer buttons are disabled and a button to start again appears on screen. The game has 5 questions and at the end the user receives a score and number of hits. After that, the user can choose to play again or see the ranking of the players.','https://deboraserra.github.io/project-trivia-game/','blob:https://deboraserra.github.io/b9299484-4214-4fd6-a35a-d77dc4ada423');
/*!40000 ALTER TABLE `front_end` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fundaments`
--

DROP TABLE IF EXISTS `fundaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fundaments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fundaments`
--

LOCK TABLES `fundaments` WRITE;
/*!40000 ALTER TABLE `fundaments` DISABLE KEYS */;
INSERT INTO `fundaments` VALUES (1,'Project Pixel Art','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a painting board were the user can select a a color and then click the \'pixel\' board to color it. The user can also resize the board from 5 to 50 \'pixels\'.','https://deboraserra.github.io/Project-pixel-art/index.html','blob:https://deboraserra.github.io/3040c035-74a1-488b-8ece-6ee1f2a3c19a'),(2,'Project Mystery Letter','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a sort of game where the user can type a phrase e see it turned into a message \'clipped\' from magazines and newspapers.','https://deboraserra.github.io/Project-mystery-letter/index.html','blob:https://deboraserra.github.io/7db04ecf-1e16-4759-abeb-844879afaefb'),(3,'Project Color Guess','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. This project is a game where the user receive three different numbers between 0 and 255 and 6 colors. Then they have to guess which of the colors match the given numbers based in the rgb colors. For each right answer the user receives 3 points.','https://deboraserra.github.io/Project-color-guess/index.html','blob:https://deboraserra.github.io/c2d169fb-062b-4f8e-ac6a-7e261fc31a34'),(4,'Project lessons learned','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in HTML5 and positioning in CSS3 that we had achieved so far.','https://deboraserra.github.io/Project-lessons-learned/project-block3.html','blob:https://deboraserra.github.io/add12588-dc2b-4c45-8b40-8ee81cff56ca'),(5,'Project Playground Functions','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in JavaScript using conditions (if/else, switch/case), loops (for, for/in, for/of) and common operators.','https://github.com/DeboraSerra/Trybe-exercises/tree/main/Module1_Fundaments/Block4/Project-playground-functions','blob:https://deboraserra.github.io/44d0ef48-9f27-41a4-8baf-ca16d6a26f10'),(6,'Project To Do List','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a to do list were the user can add as many tasks as they like, can mark it as complete, change it\'s position, delete tasks and save to access the tasks later.','https://deboraserra.github.io/Project-to-do-list/index.html','blob:https://deboraserra.github.io/23acd164-7f13-4e54-b6ec-7799c407cbbe'),(7,'Project Shopping Cart','It was developed as project to the Software Development course in Trybe. This project was meant to apply the use of asynchronous functions a usage of APIs. It simulates a shopping app, where the user can browse through the technology items an save them to the shopping cart or delete it from the cart. The final price is calculated automatically.','https://deboraserra.github.io/Project-shopping-cart/index.html','blob:https://deboraserra.github.io/b167ec03-68a2-458a-a6bf-d1940231ac84'),(8,'Project Meme Generator','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. In this project the user can select a famous image or upload one and type a message to appear as a meme. They can also select three different type of border to decorate it.','https://deboraserra.github.io/Project-meme-generator/index.html','blob:https://deboraserra.github.io/9ef7ca53-0a66-439a-b549-adab8e861e65'),(9,'Project Trybewarts','It was developed in groups of 2 people as a project to the Software Development course in Trybe and was meant to apply the knowledge we got so far regarding forms and the properties of Flex box in CSS. It simulates a registration form to the school of Trybewarts.','https://deboraserra.github.io/Project-Trybewarts/index.html','blob:https://deboraserra.github.io/577b9e9e-e81f-4fce-ae28-0a0f9c7d4c2a'),(10,'Project Zoo Functions','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in Higher Order Functions, Destructuring, Spread Operator and others improvements of ES6. It simulates the systems in a zoo. The next step in this project is apply the functions developed in an \'Online Zoo\' so the user can interact with the functions developed.','https://github.com/DeboraSerra/DeboraSerra.github.io/tree/main/Project-zoo-functions','blob:https://deboraserra.github.io/1af1efc0-9ee8-4479-b02c-539c22e6aa9f');
/*!40000 ALTER TABLE `fundaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` VALUES (1,'Clock','It was developed as a challenge from one of Trybe\'s instructors. It is a dynamic clock with responsive design.','https://deboraserra.github.io/Clock/index.html','blob:https://deboraserra.github.io/f6ea564d-e445-4c44-aa19-b37eaae2aeb4'),(2,'Project Stopwatch','It was a developed as a challenge from one of Trybe\'s specialists. Since in class we needed timers to mark the interval, we were challenged to develop a timer with the following requirements: It must be developed in React, the timer must work properly, It must have something to signal that the time is over.','https://deboraserra.github.io/stopwatch/','blob:https://deboraserra.github.io/49d7ebd1-af38-4f4a-8afb-9d0512f5a1d4'),(3,'Password Generator','It was developed as a challenge from one of Trybe\'s specialists. The goal was to create a password generator with mobile first design where the user can select the length of the password and if it must include uppercase letters, lowercase letters, numbers and/or symbols.','https://deboraserra.github.io/password-generator/','blob:https://deboraserra.github.io/8901e2c1-612c-4b84-a2e7-2e640b88811a'),(4,'Project Escritório do seu Zé','It was developed as a challenge from one of Trybe\'s instructors. For this project we were given a \'database\' of people and were asked to develop an API to create, read, update and delete (CRUD) the data in this \'database\'. After creating the API, we were asked to create a front end to use this API. Next, we were oriented to develop the unit tests to the backend and frontend. And, at last, to dockerize the application. In this application, the person must first \'login\' with a valid email and a password that has at least one letter, one number and one symbol. If the person isn\'t registered, they can click on the button to register and then login. After that the user is free to see the people, delete, update or add new people to the database.','https://github.com/DeboraSerra/Escritorio-do-seu-ze','blob:https://deboraserra.github.io/a91a5942-ef35-49b1-8a7c-6ed52f6d22f5');
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24 18:43:18

# Appetite - restaruants searching app
A simple application to search for restaurants created with React.

## General info
This project is a simple application to search for restaurants by name, cousine or dishes in given location. The application displays information about the found restaurants. Restaurants list is returned by the Yelp API. 
This project was created for a contest organized by Girls.js. 

## Technologies
This project is created with **React.js** version: 16.8.6

## Setup
Clone this repo to your desktop. After that go to it's root directory and run 

`$ npm install`

to install its dependencies.
Once the dependencies are installed, you can run 

`$ npm start` 

to start the application. You will then be able to access it at localhost:3000

In order to use the Appetite api you must use an API key from the **Yelp api**. 

**To get an API key:**
- Navigate to the “Manage App” section of the documentation page 

<https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app>

You’ll have to log in or create an account.
- Once you login, create a new app using the menu to the left.
- You should see an “API Key” presented to you. 

**To setup your API key:**
- create a file called .env in the root of project's directory, run:

  `$ touch .env`
- inside the .env file assign your api key in this format: 

  `REACT_APP_API_KEY=`*`your_api_key`*

## Sources 
This app is inspired by *Ravenous*, my previous project made with Codecademy.
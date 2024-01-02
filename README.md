# Coligo-Nodejs

## Description
- it is a backend application which provide web service using NodeJs , MongoDB and Mongoose , it has a CRUD operations for Announcements and Quizzes in Platform

# you can see the deployed version in : https://coligo-nodejs.vercel.app/

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

- [License](#license)

## Installation
1. Clone the repository: git clone https://github.com/HodaRoushdy/Coligo-nodejs.git
2. Install dependencies: npm install

## Usage
1. Start the server: npm start
2. Open your browser and visit http://localhost:3000 

## API Documentation
- GET API on http://localhost:3000/api/quizzes/ => retrieve all Quizzes in my database 
- GET API on http://localhost:3000/api/announcements/ => retrieve all announcements in my database
- GET API on http://localhost:3000/api/quizzes/:id => retrieve specific quiz in my database with its id
- GET API on http://localhost:3000/api/announcements/:id => retrieve specific announcement in my database with its id
- POST API on http://localhost:3000/api/announcements/ => enable you to add your own announcement 
- POST API on http://localhost:3000/api/quizzes/ => enable you to add your own quiz
- PATCH API on http://localhost:3000/api/quizzes/:id => enable you to update your Quiz details  with its is
- PATCH API on http://localhost:3000/api/announcements/:id =>: enable you to update your announement details with its is
- DELETE API on http://localhost:3000/api/quizzes/:id => enable you to delete any quiz with its id 
- DELETE API on http://localhost:3000/api/announcements/:id => enable you to delete any announcement with its id 


## License
- Huda Roushdy

# This project was completed in 2 days.

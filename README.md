﻿
# Registration System

This is a full-stack application for managing registrations using React, Node.js, Express, and PostgreSQL.

## Deployment Link (live demo)

  https://crud-frontend-ki3x.onrender.com

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL

## Setup

1. Clone the repository:
git clone [https://github.com/your-username/registration-system.git](https://github.com/your-username/registration-system.git)
cd registration-system


2. Set up the database:
- Create a new PostgreSQL database named `registration_db`
- Run the following SQL command to create the `registrations` table:
  ```sql
  CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    dob DATE NOT NULL
  );


3. Set up the backend:
    cd backend
    npm install
    npm install express pg dotenv
    npm install cors


    Create a `.env` file in the `backend` directory with the following content:
        PORT=5000
        DB_USER=your_db_user
        DB_HOST=localhost
        DB_NAME=registration_db
        DB_PASSWORD=your_db_password
        DB_PORT=5432
    Replace the values with your actual PostgreSQL credentials.


4. Set up the frontend:
    cd ../client
    npm install
    npm install axios

## Running the application

1. Start the backend server:
    cd server
    npm start

2. Start the frontend development server:
    cd ../client
    npm start

3. Open your browser and navigate to `http://localhost:3000` to use the application.


## Features

- Create new registrations
- View all registrations
- Update existing registrations
- Delete registrations


## Technologies Used

- Frontend: React, Axios, Tailwind CSS
- Backend: Node.js, Express, PostgreSQL
- Database: PostgreSQL



This completes the full-stack application setup with React for the frontend, PostgreSQL for the backend, and Node.js with Express for the server. The application follows best practices, including:

1. Separation of concerns (MVC pattern on the backend)
2. Use of environment variables for sensitive information
3. Proper error handling and validation
4. RESTful API design
5. React hooks for state management
6. Axios for API calls
7. Tailwind CSS for styling
8. Responsive design

To run the application, follow the instructions in the README.md file. Make sure to set up the PostgreSQL database and update the `.env` file with your database credentials before starting the server.# crud
# crudfinal-react-and-postgresql

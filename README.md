<a name="top"></a>

# Authenticate Me 🔐 
<details>
    <summary><b>Table of Contents</b></summary>
    <ol>
        <li><a href="#project-overview">Project Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#deployment">Deployment</a></li>
    </ol></details>

## Project Overview
Authenticate Me is a lightweight full-stack application designed as my stepping stone into the world of full-stack development. The project incorporates foundational elements commonly found in web applications: account creation, login, logout, along with a tried-and-true user authentication and authorization pattern.

## Built With:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


<p align="right">(<a href="#top">jump to top</a>)</p>

## Goals
- **Grasp Core Functionality**: As my first full-stack project, the goal was to understand and implement core web functionalities such as account creation, log in, log out, and user authentication.
- **Dive into Databases**: Delve deep into PostgreSQL, understanding its strengths and intricacies to manage user data securely.
- **Data flow and state management**: Adopt and master the Redux Toolkit to manage the application's state efficiently and streamline data flow across components.
- **Decipher Authentication**: Build an application that's not only functional, but also resilient against common cyber threats.
- **Holistic Development**: Cement a foundational understanding of how front-end and back-end technologies intertwine and communicate, laying the groundwork for more complex projects in the future.
- **Deployment**: Experience the nuances and challenges of deploying a full-stack application, transitioning from a local development environment to a live platform accessible by users.

<p align="right">(<a href="#top">jump to top</a>)</p>

## Deployment
### Remote Deployment
To view the live version of Authenticate Me, [click here](https://authenticate-me-iocy.onrender.com/). Follow the on-screen instructions to register or log in.

### Local Deployment
Follow these steps to run Authenticate Me on your local machine for development and testing.

- **Prerequisites**
    - Node.js & NPM
    - PostgreSQL

- **Installing**
    1. Clone the repository to your local machine.
    2. Navigate to the project directory.
    3. Create a `.env` file in `backend` and define the variables below for your PostgreSQL database, your desired JWT parameters, and bcrypt salt to be used for hashing:  
        ```
            PORT=5000
            DB_USERNAME=
            DB_PASSWORD=
            DB_DATABASE=
            DB_HOST=localhost
            JWT_SECRET=
            JWT_EXPIRES_IN=
            BCRYPT_SALT=
        ```
    4. Run `npm install` inside `frontend` to install all required front-end dependencies.
    5. Run `npm start` inside `frontend` to start the front-end.
    6. Run `npm install` inside `backend` to install all required back-end dependencies.
    7. Run `npm start` inside `backend` to start the back-end. 
    8. Run `dotenv npx sequelize db:migrate` inside `backend` to run Sequelize migrations. 
    9. Run `dotenv npx sequelize db:migrate` inside `backend` if you would like to seed the database with mock data.

<p align="right">(<a href="#top">jump to top</a>)</p>

# AzzEx

## Overview

AzzEx is a web application that allows users to buy and sell products seamlessly, providing a user-friendly platform for browsing, listing, and purchasing items. This project showcases a complete MERN stack application (MongoDB, Express, React, Node.js), demonstrating proficiency in both frontend and backend development skills.

## Features

- **Product Listings**: Users can view a dynamic list of products available for sale.
- **Search Functionality**: A robust search feature enables users to find specific items quickly.
- **Responsive Design**: The application is fully responsive, ensuring a great user experience across all devices.
- **Media Support**: Users can upload images for their listings, enhancing the presentation of products.

## Technologies Used

### Frontend

- **React**: 
  - Utilized for building a responsive and dynamic user interface. Components like Header, Listings, and Footer were created to organize the UI. 
  - React Hooks (useState, useEffect,  ) are employed for state management and lifecycle methods.

- **React Router**: 
  - Used for navigating between different pages (Home, Listings, About Us).

- **Axios**: 
  - Handles HTTP requests for communication with the backend API.

- **Bootstrap**: 
  - A front-end framework for designing responsive websites, providing ready-to-use components and styling.

- **CSS**: 
  - Custom styles are applied for a consistent look throughout the app. CSS files are organized by components.

### Backend

- **Node.js**: 
  - The server-side runtime environment for executing JavaScript code.

- **Express**: 
  - Set up the server and define RESTful routes for the backend, including middleware for handling requests and responses.

- **MongoDB & Mongoose**: 
  - MongoDB serves as the database to store user information, product listings, and transaction records. Mongoose is used as the ODM library for database interactions.

- **User Authentication (JWT)**: 
  - Implemented secure authentication and authorization using JSON Web Tokens, generated upon successful login.

### Version Control

- **Git & GitHub**: 
  - Used for version control to track changes, manage branches, and collaborate. Includes a README file, issues, and pull requests for project documentation.

## API Endpoints

 

- **Product Management**:
  - `POST /api/products`: Create a new product listing.
  - `GET /api/products`: Fetch all product listings.
  - `GET /api/products/:id`: Fetch a specific product by ID.

## Key Features

### User Interface

- Home page with a welcoming banner and easy navigation.
- Dynamic listings showcasing categories of products.
- Responsive design for optimal viewing on all devices.

 

### Product Management

- Ability to add products to listings.
- Edit and delete functionalities for user-owned listings.

### Error Handling

- Graceful error handling and user-friendly messages for better user experience.

### Custom Styles and Animations

- Thematic styles to create an engaging atmosphere.
- Animated elements for a lively interface.

## Project Setup

### Frontend Setup

1. Clone the repository and navigate to the `frontend` folder.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` to launch the development server.

### Backend Setup

1. Navigate to the `backend` folder and run `npm install`.
2. Create a `.env` file for environment variables (e.g., database connection, JWT secret).
3. Use `npm start` to launch the backend server.

### Database Setup

- MongoDB connection is established in `config/db.js`.
- Mongoose models are defined for User and Product.

 

## Folder Structure

 
Capstone/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.jsx
├── package.json
└── README.md




# MOSAIC – Personal Blog Platform

**MOSAIC** is a full-stack personal blogging platform developed as a final project. The name represents the idea that life is a collection of small pieces—experiences, moments, and thoughts—that come together to form a unique and beautiful picture.

---

##  Live Demo
You can view the live project here:  
[**MOSAIC on Render**](https://mosaic-tfei.onrender.com)

---

## Key Features
* **User Authentication**: Secure Registration and Login using JWT (JSON Web Tokens).
* **Blog Management**: Ability to create, read, and view personal blog posts.
* **User Profiles**: Dedicated profile pages for each user.
* **Cloud Database**: All data is stored and managed in the cloud using MongoDB Atlas.
* **Responsive Design**: A clean, mosaic-inspired UI that works across different screen sizes.

---

## Tech Stack

### Backend
* **Node.js & Express**: Server-side logic and API routing.
* **MongoDB Atlas**: NoSQL cloud database for data persistence.
* **Mongoose**: ODM for MongoDB to handle data modeling.
* **JWT & Bcrypt**: Secure password hashing and token-based authorization.

### Frontend
* **HTML5 & CSS3**: Semantic structure with custom, per-page styling.
* **Vanilla JavaScript**: Asynchronous communication with the Backend API using `fetch`.

---

## Local Setup Instructions for MOSAIC

### Clone the repository: Run the following command in your terminal:
```
git clone https://github.com/AknurOE/mosaic.git
```
### Install dependencies: Navigate to the project folder and install the required packages:
```
npm install
```

### Configure Environment Variables: Create a file named .env in the root directory and add the following lines:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
(Note: Replace the placeholders with your actual MongoDB URI and a secure secret key.)

### Run the server: Start the application locally:
```
npm start
```

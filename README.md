# Product Feedback Portal

A full-stack web application for browsing products, viewing details, and submitting customer feedback with ratings, comments, and optional images.  
Includes an admin dashboard for managing products and feedback.

---

## Overview
The Product Feedback Portal allows:
- Customers to browse and view products.
- Viewing detailed product descriptions, prices, and customer reviews.
- Submitting feedback with star ratings, comments, and optional images.

The application follows a modular architecture with a clear separation between frontend, backend, and database layers.

---

## Architecture & Design Choices
- **Frontend:** React, Redux Toolkit, TailwindCSS, Ant Design  
- **Backend:** Node.js, Express.js, PostgreSQL  
- **Database:** PostgreSQL  
- **Authentication:** JWT-based authentication with refresh token support  
- **Routing:** React Router v6 for client-side navigation  
- **State Management:** Redux Toolkit slices for predictable state handling  
- **Error Handling:** Centralized backend error middleware  
- **Protected Routes:** Role-based access control for admin and customer areas  

---

## Prerequisites
- Node.js (v18+)  
- npm (v9+) or yarn  
- PostgreSQL (v14+)  
- Git  

---

## Features Implemented

## User & Authentication
- User registration and login (JWT-based authentication with refresh tokens)  
- Role-based access control (Admin vs Customer)  
- Protected routes in frontend and backend based on roles  

## Products
- Product listing page with all products displayed  
- Individual product detail page showing:
  - Product name, description, price  
  - Product images carousel (with placeholder fallback)  
  - Average customer rating  
- Admin can add, update, and delete products  

## Feedback & Reviews
- Customers can submit feedback:
  - Star rating  
  - Comment text  
  - Optional image uploads  
- Display of all feedback per product  
- Average rating calculation displayed on product detail page  
- Admin moderation of feedback (approve, reject, delete)  

## UI & UX
- Responsive layout for desktop and mobile (TailwindCSS)  
- Loading states and error handling displayed gracefully  
- Carousel for product images (Ant Design Carousel)  
- Feedback cards with images and comments  

## Backend & Database
- PostgreSQL database with proper schema for products, feedback, and users  
- Migrations and seed data support  
- Secure storage of user passwords (hashed)  
- REST API endpoints for products, feedback, and user authentication  
- Image handling: store images as Base64 or file path references  

## State Management
- Redux Toolkit slices for managing product, feedback, and user state  
- Centralized handling of async API calls  
- Redux store connected with React components for reactive UI  

## Testing & Coverage
- Backend and frontend unit tests  
- Coverage reports for both frontend and backend

---
```bash
## Installation
## 1. Clone the repository
git clone https://github.com/your-username/product-feedback-portal.git
cd product-feedback-portal

## 2. Install dependencies
cd frontend
npm install
cd ../backend
npm install

---

## Environment Variables
## API endpoint of the backend
VITE_API_URL=http://localhost:5000/api

## Running the Application
npm run dev

## Create a .env file in the backend folder:
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=product_feedback
### or use a single DATABASE_URL
### DATABASE_URL=postgresql://user:pass@localhost:5432/product_feedback
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_jwt_secret

## Database Setup
#### Ensure PostgreSQL is running and you have permissions to create a database

## 1. Create the database
createdb product_feedback

## Start backend server
npm run dev

# Roxiler Systems Backend

📽️ Postman Testing Video: https://drive.google.com/drive/folders/181PHEyEXQqXpQPZK0m-kDAUW3O1lRSHW?usp=sharing

📦 SQL File for Database Schema: https://drive.google.com/file/d/1YHueubeeVFp2RHiKincx7Q6ggAfHZQkC/view?usp=sharing

📝 Note: The frontend is not yet created. I’m currently learning React.js and plan to build the user interface once I’m more comfortable with it.

This is the backend for the **Roxiler Systems** project, built using **Node.js**, **Express**, and **MySQL**. It provides a robust API for user authentication, store management, and a rating system.


## 🚀 Features

- **User Authentication**: Secure registration and login using JWT-based authentication.
- **Store Management**: Create and retrieve store details.
- **Rating System**: Submit and view ratings for stores.
- **Admin Dashboard**: Access analytics on users, stores, and ratings (admin only).


## 📁 Key Files

- `server.js`: Entry point of the application.
- `config/db.js`: MySQL database connection setup.
- `controllers/`: Contains business logic for each endpoint.
- `models/`: ORM-like structure for database operations.
- `routes/`: API route definitions.
- `middlewares/`: Authentication and role-based access control.
- `utils/validators.js`: Input validation functions using `express-validator`.


## ⚙️ Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:  
   Create a `.env` file in the root directory with the following content:
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=rating
    JWT_SECRET=yourjwtsecret
    ```

4. **Start the server**:
    ```bash
    nodemon server.js
    ```


## 📡 API Endpoints

### 🔐 Authentication
- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Login and receive a JWT token.

### 🏬 Stores
- **GET** `/api/stores/stores`: Retrieve all stores (requires authentication).
- **POST** `/api/stores`: Create a new store (requires authentication).
- **POST** `/api/stores/rate`: Submit a rating for a store (requires authentication).

### 🛠️ Admin
- **GET** `/api/admin/dashboard`: View statistics on users, stores, and ratings (admin access only).

### 👥 Users
- **GET** `/api/users`: Retrieve all users.


## 🛢️ Database Schema

### Users Table
- `id`: Primary key.
- `name`: Full name.
- `email`: Unique user email.
- `password`: Hashed password.
- `address`: Physical address.
- `role`: User role (`user` or `admin`).

### Stores Table
- `id`: Primary key.
- `name`: Store name.
- `email`: Contact email.
- `address`: Store location.
- `owner_id`: Foreign key referencing the user who owns the store.

### Ratings Table
- `id`: Primary key.
- `user_id`: Foreign key referencing the user.
- `store_id`: Foreign key referencing the store.
- `rating`: Numeric rating (1–5).


## 🧪 Testing

The backend has been **thoroughly tested using Postman** to ensure all endpoints are functional, secured with proper authentication, and validate inputs effectively.


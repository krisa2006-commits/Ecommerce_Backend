# E-Commerce Platform – Backend API

A professional E-Commerce Backend Application built using **Node.js, Express.js, MongoDB and Mongoose**, following the MVC Architecture.

The project provides secure authentication, role-based authorization, product management, category management and multiuser support.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Cookie Parser
- dotenv
- Postman

## Key Features

### Authentication & Authorization

- User Registration
- User Login and Logout
- JWT Authentication
- JWT stored in HTTP-only Cookies
- Secure Password Hashing using bcryptjs
- Admin and User Roles
- Role-Based Access Control

### Product Management

- Add Product
- Get All Products
- Get Single Product
- Update Product
- Delete Product
- Get User-Specific Products
- Category-wise Product Filtering

### Category Management

- Add Category (Admin Only)
- Get All Categories
- Get Single Category
- Update Category (Admin Only)
- Delete Category (Admin Only)

### Additional Features

- Multiuser Support
- MongoDB Populate
- Product Ownership Verification
- Protected API Routes
- MVC Architecture

## Project Structure

```text
Ecommerce_Backend/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Category.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── categoryController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── categoryRoutes.js
│   │
│   └── utils/
│       └── generateToken.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/krisa2006-commits/Ecommerce_Backend.git
```

### 2. Navigate to Project Folder

```bash
cd Ecommerce_Backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce_platform
JWT_SECRET=your_secret_key
```

Replace `your_secret_key` with your own JWT secret key.

### 5. Start the Server

```bash
npm start
```

Server will run at:

```text
http://localhost:5050
```

## API Endpoints

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | User Login |
| POST | /api/auth/logout | User Logout |

### Product APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/products | Add Product |
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Single Product |
| GET | /api/products/my-products | Get My Products |
| GET | /api/products?category=CATEGORY_ID | Filter Products by Category |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

### Category APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/categories | Add Category |
| GET | /api/categories | Get All Categories |
| GET | /api/categories/:id | Get Single Category |
| PUT | /api/categories/:id | Update Category |
| DELETE | /api/categories/:id | Delete Category |

## Role-Based Access

| Feature | Admin | User |
|---|---|---|
| Register / Login | Yes | Yes |
| View Products | Yes | Yes |
| Add Products | Yes | Yes |
| Update Own Products | Yes | Yes |
| Delete Own Products | Yes | Yes |
| Manage All Products | Yes | No |
| Manage Categories | Yes | No |
| View Own Products | Yes | Yes |

A new registered user receives the default `user` role. The initial admin role must be assigned securely through the database.

## MVC Architecture

The project follows the Model-View-Controller architecture adapted for a REST API.

- **Models:** Define database schemas using Mongoose.
- **Views:** No separate frontend or EJS views; API responses are returned in JSON.
- **Controllers:** Handle application business logic.
- **Routes:** Define API endpoints.
- **Middleware:** Handle authentication and authorization.

## API Testing

All APIs can be tested using **Postman**.

The project supports JSON-based requests and responses with cookie-based JWT authentication.

## Database

MongoDB is used as the primary database.

Collections:

- Users
- Products
- Categories

Mongoose `populate()` is used to retrieve associated User and Category information.

## Project Explanation Video

**Explanation Video Link:** [(https://drive.google.com/file/d/1Iw20tx_upZLtfeAWvpdmtqSDD6TzFS-d/view?usp=sharing)]

## Author

E-Commerce Platform – Node.js Practical Project

**Developed using Node.js, Express.js and MongoDB.**